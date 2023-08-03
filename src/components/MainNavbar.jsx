import React, { createRef, memo, useEffect, useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import packageInfo from '../../package.json';
import './MainNavbar.css';
import IconExternal from './icons/IconExternal';
import IconPerson from './icons/IconPerson';
import IconShop from './icons/IconShop';

export default memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const offCanvas = createRef();

  useEffect(() => {
    setIsHomeVisible(location.pathname !== '/');

    if (offCanvas?.current?.backdrop) {
      offCanvas.current.backdrop.click();
    }
  }, [location]);

  return (
    <Navbar expand={false} sticky="top" bg="light" data-bs-theme="light" className="bg-white shadow-sm p-2">
      <Container>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas ref={offCanvas} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">{packageInfo.displayName}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {isHomeVisible ? <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link> : null}
              <Nav.Link href={packageInfo.homepage} target="_blank" className="d-flex gap-2 align-items-center">
                Repository
                <IconExternal className="text-secondary" />
              </Nav.Link>
              <Nav.Link href={packageInfo.author.url} target="_blank" className="d-flex gap-2 align-items-center">
                Author
                <IconExternal className="text-secondary" />
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Nav className="justify-content-end">
          <span className="d-flex align-items-center gap-2 text-secondary">
            <IconPerson className="text-primary" />
            admin admin
          </span>
          <span className="d-flex align-items-center gap-2 text-secondary">
            <IconShop className="text-primary" />
            Int_Website
          </span>
        </Nav>
      </Container>
    </Navbar>
  );
});
