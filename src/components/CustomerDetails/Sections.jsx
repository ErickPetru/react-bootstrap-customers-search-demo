import React, { memo } from 'react';
import { Accordion } from 'react-bootstrap';
import CustomerDetailsContact from './Contact';
import CustomerDetailsDriverLicense from './DriverLicense';
import CustomerDetailsEmployment from './Employment';
import CustomerDetailsHousingIncome from './HousingIncome';
import CustomerDetailsInfo from './Info';
import CustomerDetailsReference from './Reference';

export default memo((props = { data: {} }) => (
  <div className="mt-3">
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Customer Information</Accordion.Header>
        <Accordion.Body>
          <CustomerDetailsInfo data={props.data} />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Contact Information</Accordion.Header>
        <Accordion.Body>
          <CustomerDetailsContact data={props.data} />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Driver&apos;s License Information</Accordion.Header>
        <Accordion.Body>
          <CustomerDetailsDriverLicense data={props.data} />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Employment Information</Accordion.Header>
        <Accordion.Body>
          <CustomerDetailsEmployment data={props.data} />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Housing and Income</Accordion.Header>
        <Accordion.Body>
          <CustomerDetailsHousingIncome data={props.data} />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>Reference Information</Accordion.Header>
        <Accordion.Body>
          <CustomerDetailsReference data={props.data} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
));
