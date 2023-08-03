import React, { memo, useState } from 'react';
import { Accordion, Button, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import SearchCustomerInfo from '../components/SearchCustomer/Info';
import SearchCustomerItem from '../components/SearchCustomer/Item';
import SearchCustomerQuote from '../components/SearchCustomer/Quote';
import SearchCustomerReceipt from '../components/SearchCustomer/Receipt';
import SearchCustomerSale from '../components/SearchCustomer/Sale';
import SearchCustomerTransaction from '../components/SearchCustomer/Transaction';
import TitleBar from '../components/TitleBar';
import { useToast } from '../hooks/useToast';
import { findCustomer } from '../services/CustomersService';
import './SearchCustomer.css';

export default memo(() => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [isWaiting, setIsWaiting] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsWaiting(true);
      const result = await findCustomer(data);
      navigate(`/customerInfo?custId=${result.custInfo.Id}`);
    } catch (error) {
      showToast(error.message);
    } finally {
      setIsWaiting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Search Customer</title>
      </Helmet>

      <TitleBar title="Search Customer" />

      <main className="pb-4">
        <Container>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Enter the customer information</Accordion.Header>
              <Accordion.Body>
                <SearchCustomerInfo isWaiting={isWaiting} onSubmit={onSubmit} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Enter Sale Number</Accordion.Header>
              <Accordion.Body>
                <SearchCustomerSale isWaiting={isWaiting} onSubmit={onSubmit} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Enter Receipt Number</Accordion.Header>
              <Accordion.Body>
                <SearchCustomerReceipt isWaiting={isWaiting} onSubmit={onSubmit} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Enter Quote Number</Accordion.Header>
              <Accordion.Body>
                <SearchCustomerQuote isWaiting={isWaiting} onSubmit={onSubmit} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Enter Item Information</Accordion.Header>
              <Accordion.Body>
                <SearchCustomerItem isWaiting={isWaiting} onSubmit={onSubmit} />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>Merchant Service Transaction #</Accordion.Header>
              <Accordion.Body>
                <SearchCustomerTransaction isWaiting={isWaiting} onSubmit={onSubmit} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div className="d-flex gap-3 justify-content-center mt-4">
            <Button variant="primary" onClick={() => navigate('/customerInfo')} disabled={isWaiting}>
              Enter New Client
            </Button>
          </div>
        </Container>
      </main>
    </>
  );
});
