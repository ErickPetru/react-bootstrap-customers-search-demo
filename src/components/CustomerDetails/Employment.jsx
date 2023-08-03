import React, { memo } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';

export default memo((props = { data: {} }) => {
  const { control } = useForm({
    defaultValues: {
      employer: props.data?.Employer ?? '',
      position: props.data?.Position ?? '',
      yearsWorked: props.data?.EmploymentYears ?? '',
      previousEmployer: props.data?.PreEmployer ?? '',
      previousPosition: props.data?.PrePosition ?? '',
      previousYearsWorked: props.data?.PreEmploymentYears ?? '',
    },
  });

  return (
    <Form id="customerDetailsEmployment" className="pt-4 pb-4">
      <Form.Group as={Row} className="mb-4">
        <Col sm={4}>
          <FloatingLabel label="Employer" controlId="employer">
            <Controller
              name="employer"
              control={control}
              render={({ field }) => <Form.Control type="text" placeholder="Employer" {...field} />}
            />
          </FloatingLabel>
        </Col>

        <Col sm={4}>
          <FloatingLabel label="Position" controlId="position">
            <Controller
              name="position"
              control={control}
              render={({ field }) => <Form.Control type="text" placeholder="Position" {...field} />}
            />
          </FloatingLabel>
        </Col>

        <Col sm={4}>
          <FloatingLabel label="Years Worked" controlId="yearsWorked">
            <Controller
              name="yearsWorked"
              control={control}
              render={({ field }) => <Form.Control type="number" placeholder="Years Worked" {...field} />}
            />
          </FloatingLabel>
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={4}>
          <FloatingLabel label="Previous Employer" controlId="previousEmployer">
            <Controller
              name="previousEmployer"
              control={control}
              render={({ field }) => <Form.Control type="text" placeholder="Previous Employer" {...field} />}
            />
          </FloatingLabel>
        </Col>

        <Col sm={4}>
          <FloatingLabel label="Position" controlId="previousPosition">
            <Controller
              name="previousPosition"
              control={control}
              render={({ field }) => <Form.Control type="text" placeholder="Position" {...field} />}
            />
          </FloatingLabel>
        </Col>

        <Col sm={4}>
          <FloatingLabel label="Years Worked" controlId="previousYearsWorked">
            <Controller
              name="previousYearsWorked"
              control={control}
              render={({ field }) => <Form.Control type="number" placeholder="Years Worked" {...field} />}
            />
          </FloatingLabel>
        </Col>
      </Form.Group>
    </Form>
  );
});
