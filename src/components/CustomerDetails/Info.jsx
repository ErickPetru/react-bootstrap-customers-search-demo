import React, { memo } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { DAYS, MONTHS, YEARS } from '../../constants';

export default memo((props = { data: {} }) => {
  const { control } = useForm({
    defaultValues: {
      firstName: props.data?.Fname ?? '',
      middleName: props.data?.Mname ?? '',
      lastName: props.data?.Lname ?? '',
      ssn: props.data?.ssn ?? '',
      birthMonth: props.data?.DobM ?? '',
      birthDay: props.data?.DobD ?? '',
      birthYear: props.data?.DobY ?? '',
    },
  });

  return (
    <Form id="customerDetailsInfo" className="pt-4 pb-4">
      <Row className="mb-4">
        <Col>
          <FloatingLabel label="First Name" controlId="firstName">
            <Controller
              name="firstName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Form.Control type="text" placeholder="First Name" required {...field} />}
            />
          </FloatingLabel>
        </Col>

        <Col>
          <FloatingLabel label="Middle Name" controlId="middleName">
            <Controller
              name="middleName"
              control={control}
              render={({ field }) => <Form.Control type="text" placeholder="Middle Name" {...field} />}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <FloatingLabel label="Last Name" controlId="lastName">
            <Controller
              name="lastName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Form.Control type="text" placeholder="Last Name" required {...field} />}
            />
          </FloatingLabel>
        </Col>

        <Col>
          <FloatingLabel label="SSN" controlId="ssn">
            <Controller
              name="ssn"
              control={control}
              render={({ field }) => <Form.Control type="number" placeholder="SSN" {...field} />}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Form.Group as={Row} controlId="birthDate">
        <Form.Label column sm={1} className="text-end">
          Date of Birth:
        </Form.Label>

        <Col sm={4}>
          <Controller
            name="birthMonth"
            control={control}
            render={({ field }) => (
              <Form.Select aria-label="Month" {...field}>
                <option>Month</option>
                {MONTHS.map((month, index) => (
                  <option key={month} value={index + 1}>
                    {month}
                  </option>
                ))}
              </Form.Select>
            )}
          />
        </Col>

        <Col sm={3}>
          <Controller
            name="birthDay"
            control={control}
            render={({ field }) => (
              <Form.Select aria-label="Day" {...field}>
                <option>Day</option>
                {DAYS.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </Form.Select>
            )}
          />
        </Col>

        <Col sm={4}>
          <Controller
            name="birthYear"
            control={control}
            render={({ field }) => (
              <Form.Select aria-label="Year" {...field}>
                <option>Year</option>
                {YEARS.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Form.Select>
            )}
          />
        </Col>
      </Form.Group>
    </Form>
  );
});
