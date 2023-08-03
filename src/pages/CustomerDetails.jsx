import React, { memo, useEffect, useState } from 'react';
import { Button, Container, Nav, Placeholder, Tab } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CustomerDetailsSales from '../components/CustomerDetails/Sales';
import CustomerDetailsSections from '../components/CustomerDetails/Sections';
import TitleBar from '../components/TitleBar';
import { NOT_FOUND_ERROR, NOT_IMPLEMENTED_ERROR } from '../constants';
import { useToast } from '../hooks/useToast';
import { getCustomer } from '../services/CustomersService';

export default memo(() => {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);
  const [isWaiting, setIsWaiting] = useState(true);
  const [searchParams] = useSearchParams();
  const { showToast } = useToast();

  useEffect(() => {
    async function fetchData(id) {
      try {
        setIsWaiting(true);
        setCustomer(await getCustomer(id));
      } catch (error) {
        showToast(NOT_FOUND_ERROR.message);
      } finally {
        setIsWaiting(false);
      }
    }

    const id = searchParams.get('custId');
    if (id) {
      fetchData(id);
    } else {
      setCustomer(null);
      setIsWaiting(false);
    }
  }, [searchParams]);

  const fullName = () => (customer ? `${customer.custInfo.Fname} ${customer.custInfo.Lname}`.trim() : '');
  const title = () => (isWaiting || customer ? 'Search Customer' : 'New Customer');

  return (
    <>
      <Helmet>
        <title>
          {title()}
          :
          {' '}
          {isWaiting ? 'Loading...' : fullName()}
        </title>
      </Helmet>

      <TitleBar title={title()} subtitle={fullName()} isWaiting={isWaiting} />

      <main className="pb-4">
        <Container>
          <Button variant="light" size="sm" className="mb-4" onClick={() => navigate('/')}>
            Back
          </Button>

          {isWaiting ? (
            <div className="vstack gap-3">
              <Placeholder className="w-25" size="lg" bg="light" />
              <Placeholder className="w-50" size="lg" bg="light" />
              <Placeholder className="w-75" size="lg" bg="light" />
              <Placeholder className="w-50" size="lg" bg="light" />
            </div>
          ) : (
            <Tab.Container id="viewTab" defaultActiveKey="information">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="information">Applicant Information</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sales">View all Sales</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="information">
                  <Tab.Container id="personTab" defaultActiveKey="applicant">
                    <Nav variant="pills">
                      <div className="w-100 text-center m-0 d-flex gap-2">
                        <Nav.Item className="flex-fill">
                          <Nav.Link eventKey="applicant">Applicant</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="flex-fill">
                          <Nav.Link eventKey="coApplicant">Co-Applicant</Nav.Link>
                        </Nav.Item>
                      </div>
                    </Nav>

                    <Tab.Content>
                      <Tab.Pane eventKey="applicant">
                        <CustomerDetailsSections data={customer?.custInfo} />
                      </Tab.Pane>

                      <Tab.Pane eventKey="coApplicant">
                        <CustomerDetailsSections data={customer?.CoApp_CustInfo} />
                      </Tab.Pane>

                      <div className="d-flex gap-3 justify-content-center mt-4">
                        <Button
                          variant="primary"
                          onClick={() => showToast(NOT_IMPLEMENTED_ERROR.message)}
                          disabled={isWaiting}
                        >
                          Save Changes
                        </Button>

                        <Button
                          variant="primary"
                          onClick={() => showToast(NOT_IMPLEMENTED_ERROR.message)}
                          disabled={isWaiting}
                        >
                          Reset
                        </Button>

                        <Button
                          variant="primary"
                          onClick={() => showToast(NOT_IMPLEMENTED_ERROR.message)}
                          disabled={isWaiting}
                        >
                          Resale Certificate
                        </Button>
                      </div>
                    </Tab.Content>
                  </Tab.Container>
                </Tab.Pane>

                <Tab.Pane eventKey="sales">
                  {!customer ? (
                    <>
                      <h5 className="text-muted text-center mt-4">No customer information recorded!</h5>
                      <p className="text-muted text-center">Impossible to manage sales for non-saved users.</p>
                    </>
                  ) : (
                    <CustomerDetailsSales data={customer.sales} />
                  )}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          )}
        </Container>
      </main>
    </>
  );
});
