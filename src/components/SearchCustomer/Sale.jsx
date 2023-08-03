import React, { memo } from 'react';
import { Button, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { VALUE_REQUIRED_ERROR } from '../../constants';
import { useToast } from '../../hooks/useToast';

export default memo((props = { isWaiting: false, onSubmit: () => {} }) => {
  const { showToast } = useToast();
  const { control, handleSubmit, setFocus } = useForm({ defaultValues: { saleNumber: '' } });

  function onSubmit(data) {
    if (!data.saleNumber) {
      setFocus('saleNumber');
      showToast(VALUE_REQUIRED_ERROR.message);
      return;
    }

    props.onSubmit(data);
  }

  return (
    <Form noValidate className="mw-md" onSubmit={handleSubmit(onSubmit)}>
      <div className="hstack gap-2 align-items-center justify-content-center">
        <FloatingLabel label="Sale Number" controlId="saleNumber">
          <Controller
            name="saleNumber"
            control={control}
            render={({ field }) => <Form.Control type="number" placeholder="Enter Sale Number" required {...field} />}
          />
        </FloatingLabel>

        <Button type="submit" variant="primary" disabled={props.isWaiting}>
          {props.isWaiting ? (
            <Spinner animation="border" role="status" variant="white" size="sm">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            'Submit'
          )}
        </Button>
      </div>
    </Form>
  );
});
