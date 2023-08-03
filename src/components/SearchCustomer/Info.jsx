import React, { memo } from 'react';
import { Button, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { SOME_VALUE_REQUIRED_ERROR } from '../../constants';
import { useToast } from '../../hooks/useToast';

export default memo((props = { isWaiting: false, onSubmit: () => {} }) => {
  const { showToast } = useToast();
  const { control, handleSubmit, reset, setFocus } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      ssn: '',
      phoneNumber: '',
    },
  });

  function onSubmit(data) {
    if (!data.firstName && !data.lastName && !data.ssn && !data.phoneNumber) {
      setFocus('firstName');
      showToast(SOME_VALUE_REQUIRED_ERROR.message);
      return;
    }

    props.onSubmit(data);
  }

  return (
    <Form className="mw-md" onSubmit={handleSubmit(onSubmit)}>
      <FloatingLabel className="mb-3" label="First Name" controlId="firstName">
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => <Form.Control type="text" placeholder="First Name" {...field} />}
        />
      </FloatingLabel>

      <FloatingLabel className="mb-3" label="Last Name" controlId="lastName">
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => <Form.Control type="text" placeholder="Last Name" {...field} />}
        />
      </FloatingLabel>

      <FloatingLabel className="mb-3" label="SSN" controlId="ssn">
        <Controller
          name="ssn"
          control={control}
          render={({ field }) => <Form.Control type="number" placeholder="SSN (ex. 00000000)" {...field} />}
        />
      </FloatingLabel>

      <FloatingLabel className="mb-3" label="Phone Number" controlId="phoneNumber">
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => <Form.Control type="number" placeholder="Phone Number (ex: 9999999999)" {...field} />}
        />
      </FloatingLabel>

      <div className="hstack gap-2 justify-content-center">
        <Button type="submit" variant="primary" disabled={props.isWaiting}>
          {props.isWaiting ? (
            <Spinner animation="border" role="status" variant="white" size="sm">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            'Submit'
          )}
        </Button>

        <Button as="input" type="reset" variant="primary" value="Reset" onClick={reset} disabled={props.isWaiting} />
      </div>
    </Form>
  );
});
