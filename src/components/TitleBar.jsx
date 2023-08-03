import React, { memo } from 'react';
import { Container, Placeholder } from 'react-bootstrap';

export default memo((props = { title: '', subtitle: '', isWaiting: false }) => (
  <div className="bg-white p-2 mb-3 border-bottom border-light">
    <Container>
      <h1 className="fs-4 fw-normal m-0">
        {props.title}
        {props.subtitle || props.isWaiting ? <span>: </span> : null}
        {props.isWaiting ? (
          <Placeholder className="w-25" bg="light" />
        ) : (
          <span className="fw-light">{props.subtitle}</span>
        )}
      </h1>
    </Container>
  </div>
));
