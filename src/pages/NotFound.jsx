import React, { memo, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import TitleBar from '../components/TitleBar';
import { NOT_FOUND_ERROR } from '../constants';
import { useToast } from '../hooks/useToast';

export default memo(() => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  useEffect(() => {
    showToast(NOT_FOUND_ERROR.message);
  }, []);

  return (
    <>
      <Helmet>
        <title>Not Found!</title>
      </Helmet>

      <TitleBar title="Not Found!" />

      <main className="pb-4">
        <Container>
          <Button variant="light" size="sm" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Container>
      </main>
    </>
  );
});
