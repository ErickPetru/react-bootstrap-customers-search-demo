import React, { memo } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { USA_STATES } from '../../constants';

export default memo((props = { data: {} }) => {
  const { control } = useForm({
    defaultValues: {
      address: props.data?.Address ?? '',
      apartmentNumber: props.data?.AptNumber ?? '',
      apartmentName: props.data?.AptName ?? '',
      apartmentCode: props.data?.Aptcode ?? '',
      city: props.data?.City ?? '',
      state: props.data?.State ?? '',
      zipCode: props.data?.Zip ?? '',
      email: props.data?.Email ?? '',
      homePhone1: props.data?.HPhone1 ?? '',
      homePhone2: props.data?.HPhone2 ?? '',
      homePhone3: props.data?.HPhone3 ?? '',
      workPhone1: props.data?.WPhone1 ?? '',
      workPhone2: props.data?.WPhone2 ?? '',
      workPhone3: props.data?.WPhone3 ?? '',
      cellPhone1: props.data?.CPhone1 ?? '',
      cellPhone2: props.data?.CPhone2 ?? '',
      cellPhone3: props.data?.CPhone3 ?? '',
    },
  });

  return (
    <Form id="customerDetailsContact" className="pt-4 pb-4">
      <Row className="mb-4">
        <Col>
          <FloatingLabel label="Address" controlId="address">
            <Controller
              name="address"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Form.Control type="text" placeholder="Address" required {...field} />}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <FloatingLabel label="Apto No." controlId="apartmentNumber">
            <Controller
              name="apartmentNumber"
              control={control}
              render={({ field }) => <Form.Control type="text" placeholder="Apto No." {...field} />}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <FloatingLabel label="Apartment Name" controlId="apartmentName">
            <Controller
              name="apartmentName"
              control={control}
              render={({ field }) => <Form.Control type="text" placeholder="Apartment Name" {...field} />}
            />
          </FloatingLabel>
        </Col>

        <Col>
          <FloatingLabel label="Complex Security Code" controlId="apartmentCode">
            <Controller
              name="apartmentCode"
              control={control}
              render={({ field }) => <Form.Control type="text" placeholder="Complex Security Code" {...field} />}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Form.Group as={Row} controlId="cityStateZip" className="mb-4">
        <Col sm={4}>
          <FloatingLabel label="City" controlId="city">
            <Controller
              name="city"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Form.Control type="text" placeholder="City" required {...field} />}
            />
          </FloatingLabel>
        </Col>

        <Col sm={4}>
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Form.Select aria-label="State" {...field}>
                <option>State</option>
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
          <FloatingLabel label="Zip" controlId="zipCode">
            <Controller
              name="zipCode"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Form.Control type="number" placeholder="Zip" required {...field} />}
            />
          </FloatingLabel>
        </Col>
      </Form.Group>

      <Row className="mb-4">
        <Col>
          <FloatingLabel label="Email" controlId="email">
            <Controller
              name="email"
              control={control}
              render={({ field }) => <Form.Control type="email" placeholder="Email" {...field} />}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Form.Group className="mb-4 d-flex gap-3 align-items-center">
        <Form.Label aria-required className="mb-0 text-end text-nowrap">
          Home Phone:
        </Form.Label>

        <Controller
          name="homePhone1"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Form.Control type="number" required {...field} />}
        />

        <Controller
          name="homePhone2"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Form.Control type="number" required {...field} />}
        />

        <Controller
          name="homePhone3"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Form.Control type="number" required {...field} />}
        />

        <Col sm={6} />
      </Form.Group>

      <Form.Group className="mb-4 d-flex gap-3 align-items-center">
        <Form.Label className="mb-0 text-end text-nowrap">Work Phone:</Form.Label>

        <Controller
          name="workPhone1"
          control={control}
          render={({ field }) => <Form.Control type="number" {...field} />}
        />

        <Controller
          name="workPhone2"
          control={control}
          render={({ field }) => <Form.Control type="number" {...field} />}
        />

        <Controller
          name="workPhone3"
          control={control}
          render={({ field }) => <Form.Control type="number" {...field} />}
        />

        <Col sm={6} />
      </Form.Group>

      <Form.Group className="d-flex gap-3 align-items-center">
        <Form.Label className="mb-0 text-end text-nowrap">Cell Phone:</Form.Label>

        <Controller
          name="cellPhone1"
          control={control}
          render={({ field }) => <Form.Control type="number" {...field} />}
        />

        <Controller
          name="cellPhone2"
          control={control}
          render={({ field }) => <Form.Control type="number" {...field} />}
        />

        <Controller
          name="cellPhone3"
          control={control}
          render={({ field }) => <Form.Control type="number" {...field} />}
        />

        <Col sm={6} />
      </Form.Group>
    </Form>
  );
});
