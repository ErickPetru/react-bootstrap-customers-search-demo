import React, { memo } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { USA_STATES } from '../../constants';

export default memo((props = { data: {} }) => {
  const { control } = useForm({
    defaultValues: {
      number: props.data?.DlNumber ?? '',
      state: props.data?.DlState ?? '',
      expiration: props.data?.DlExp ?? '',
    },
  });

  return (
    <Form id="customerDetailsDriverLicense" className="pt-4 pb-4">
      <Form.Group as={Row}>
        <Col sm={4}>
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Form.Select aria-label="DL State" {...field}>
                <option>DL State</option>
                {USA_STATES.map((state) => (
                  <option key={state.abbreviation} value={state.abbreviation}>
                    {state.name}
                  </option>
                ))}
              </Form.Select>
            )}
          />
        </Col>

        <Col sm={4}>
          <FloatingLabel label="DL Number" controlId="number">
            <Controller
              name="number"
              control={control}
              render={({ field }) => <Form.Control type="number" placeholder="DL Number" {...field} />}
            />
          </FloatingLabel>
        </Col>

        <Col sm={4}>
          <FloatingLabel label="DL Exp" controlId="expiration">
            <Controller
              name="expiration"
              control={control}
              render={({ field }) => <Form.Control type="text" placeholder="DL Exp" {...field} />}
            />
          </FloatingLabel>
        </Col>
      </Form.Group>
    </Form>
  );
});
