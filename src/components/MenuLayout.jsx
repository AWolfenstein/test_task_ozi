import React from "react";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import "../styles/MenuStyles.css";
const MenuLayout = ({ a, closeMenu }) => {
  const body = (
    <Container className="menu">
      <Row onMouseLeave={closeMenu()}>
        {a &&
          a.map((link, index) => {
            return (
              <Col className="linksCol" key={index}>
                <Row className="headLink">
                  <NavLink className="link" href={link.headLink}>
                    {link.headName}
                  </NavLink>
                </Row>
                {link.sublinks &&
                  link.sublinks.map((subLink, index) => {
                    return (
                      <Row className="subLink" key={index}>
                        <NavLink className="link" href={subLink.link}>
                          {subLink.name}
                        </NavLink>
                      </Row>
                    );
                  })}
              </Col>
            );
          })}
      </Row>
    </Container>
  );

  return (
    <>
      {body}
      <div id="overlay" onMouseEnter={closeMenu()}></div>
    </>
  );
};
export default MenuLayout;
