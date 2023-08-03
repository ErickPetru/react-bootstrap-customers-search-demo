import React, { memo } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';

export default memo((props = { data: {} }) => {
  const { control } = useForm({
    defaultValues: {
      firstName: props.data?.ReferenceFname ?? '',
      lastName: props.data?.ReferenceLname ?? '',
      phoneNumber: props.data?.ReferencePhone ?? '',
      relation: props.data?.ReferenceRelation ?? '',
    },
  });

  return (
    <Form id="customerDetailsReference" className="pt-4 pb-4">
      <Row className="mb-4">
        <Col>
          <FloatingLabel label="Last Name" controlId="lastName">
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => <Form.Control type="text" placeholder="Last Name" {...field} />}
            />
          </FloatingLabel>
        </Col>

        <Col>
          <FloatingLabel label="First Name" controlId="firstName">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => <Form.Control type="text" placeholder="First Name" {...field} />}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row>
        <Col>
          <FloatingLabel label="Phone Number" controlId="phoneNumber">
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => <Form.Control type="text" placeholder="Phone Number" {...field} />}
            />
          </FloatingLabel>
          <Form.Text className="text-muted">Format: 123-456-7890</Form.Text>
        </Col>

        <Col>
          <FloatingLabel label="Relation" controlId="relation">
            <Controller
              name="relation"
              control={control}
              render={({ field }) => <Form.Control type="text" placeholder="Relation" {...field} />}
            />
          </FloatingLabel>
        </Col>
      </Row>
    </Form>
  );
});
