import React, { memo } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';

export default memo((props = { data: {} }) => {
  const { control } = useForm({
    defaultValues: {
      yearsAtHome: props.data?.YearsAtHome ?? '',
      rentType: props.data?.RentType ?? '',
      boardWith: props.data?.RentTypeBoardWith ?? '',
      monthlyIncome: props.data?.MonthlyIncome ?? '',
      monthlyPayment: props.data?.MonthlyPayment ?? '',
      mortgageCompany: props.data?.MtgCmyName ?? '',
      homeValue: props.data?.HomeValue ?? '',
    },
  });

  return (
    <Form id="customerDetailsHousingIncome" className="pt-4 pb-4">
      <Row className="mb-4">
        <Col>
          <FloatingLabel label="Years at current address" controlId="yearsAtHome">
            <Controller
              name="yearsAtHome"
              control={control}
              render={({ field }) => <Form.Control type="number" placeholder="# Years at current address" {...field} />}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Form.Group as={Row} controlId="rentType" className="vstack mb-4">
        <Controller
          name="rentType"
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <Col>
                <Form.Check
                  type="radio"
                  label="Own"
                  value="Own"
                  id="rentTypeOwn"
                  checked={value === 'Own'}
                  onChange={() => onChange('Own')}
                />
              </Col>

              <Col>
                <Form.Check
                  type="radio"
                  label="Rent"
                  value="Rent"
                  id="rentTypeRent"
                  checked={value === 'Rent'}
                  onChange={() => onChange('Rent')}
                />
              </Col>

              <div className="hstack gap-3">
                <Form.Check
                  type="radio"
                  label="Board With:"
                  value="Board"
                  className="text-nowrap"
                  id="rentTypeBoard"
                  checked={value === 'Board'}
                  onChange={() => onChange('Board')}
                />

                <Controller
                  name="boardWith"
                  control={control}
                  render={({ field }) => <Form.Control type="text" {...field} />}
                />
              </div>
            </>
          )}
        />
      </Form.Group>

      <Row className="mb-4">
        <Col>
          <FloatingLabel label="Monthly Income" controlId="monthlyIncome">
            <Controller
              name="monthlyIncome"
              control={control}
              render={({ field }) => <Form.Control type="text" placeholder="Monthly Income" {...field} />}
            />
          </FloatingLabel>
        </Col>

        <Col>
          <FloatingLabel label="Monthly Mortgage or Rent Payment" controlId="monthlyPayment">
            <Controller
              name="monthlyPayment"
              control={control}
              render={({ field }) => (
                <Form.Control type="text" placeholder="Monthly Mortgage or Rent Payment" {...field} />
              )}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row>
        <Col>
          <FloatingLabel label="Mortgage Company" controlId="mortgageCompany">
            <Controller
              name="mortgageCompany"
              control={control}
              render={({ field }) => <Form.Control type="text" placeholder="Mortgage Company" {...field} />}
            />
          </FloatingLabel>
        </Col>

        <Col>
          <FloatingLabel label="Home Value" controlId="homeValue">
            <Controller
              name="homeValue"
              control={control}
              render={({ field }) => <Form.Control type="text" placeholder="Home Value" {...field} />}
            />
          </FloatingLabel>
        </Col>
      </Row>
    </Form>
  );
});
