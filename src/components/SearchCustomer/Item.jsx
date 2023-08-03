import React, { memo } from 'react';
import { Button, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { VALUE_REQUIRED_ERROR } from '../../constants';
import { useToast } from '../../hooks/useToast';

export default memo((props = { isWaiting: false, onSubmit: () => {} }) => {
  const { showToast } = useToast();
  const { control, handleSubmit, setFocus } = useForm({ defaultValues: { itemNumber: '' } });

  function onSubmit(data) {
    if (!data.itemNumber) {
      setFocus('itemNumber');
      showToast(VALUE_REQUIRED_ERROR.message);
      return;
    }

    props.onSubmit(data);
  }

  return (
    <Form noValidate className="mw-md" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="manufacturerId">
        <Controller
          name="manufacturerId"
          control={control}
          render={({ field }) => (
            <Form.Select arial-label="Search Manufacturer" {...field}>
              <option>Search Manufacturer</option>
              <option value="1">One</option>
              <option value="2">Another</option>
              <option value="3">One more</option>
            </Form.Select>
          )}
        />
      </Form.Group>

      <div className="hstack gap-2 align-items-center justify-content-center">
        <FloatingLabel label="Item Number" controlId="itemNumber">
          <Controller
            name="itemNumber"
            control={control}
            render={({ field }) => <Form.Control type="number" placeholder="Item Number" required {...field} />}
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
