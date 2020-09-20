import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Nav, Button ,ButtonGroup } from "react-bootstrap";
import "../styles/MenuStyles.css";
import { ArrowButton, ListLinks } from "./ArrowButton";
import { links } from "../data/data";
const MenuMobileLayout = ({ close }) => {
  const [idList, setIdList] = useState("");
  const link_1 = links["link_1"];
  const link_2 = links["link_2"];
  const link_3 = links["link_3"];
  const link_4 = links["link_4"];
  const link_5 = links["link_5"];
  const link_6 = links["link_6"];

  const body = (
    <Container className="menuMobile">
    
      <Row className="rowMobile">
        <Nav.Link className="link">Элемент 1</Nav.Link>
        <div className="rightAlign">
          {link_1 ? <ArrowButton idn={link_1} key="link_1" setID={setIdList}/> : false}
        </div>
      </Row>
      {link_1 == idList ? <ListLinks idl={idList}></ListLinks> : false}
      <Row className="rowMobile">
        <Nav.Link className="link">Элемент 2</Nav.Link>
        <div className="rightAlign">
          {link_2 ? <ArrowButton idn={link_2}  key="link_2" setID={setIdList}/> : false}
        </div>
      </Row>
      {link_2 == idList ? <ListLinks idl={idList}></ListLinks> : false}
      <Row className="rowMobile">
        <Nav.Link className="link">Элемент 3</Nav.Link>
        <div className="rightAlign">
          {link_3 ? <ArrowButton idn={link_3} key="link_3" setID={setIdList} /> : false}
        </div>
      </Row>
      {link_3 == idList ? <ListLinks idl={idList}></ListLinks> : false}
      <Row className="rowMobile">
        <Nav.Link className="link">Элемент 4</Nav.Link>
        <div className="rightAlign">
          {link_4 ? <ArrowButton idn={link_4} key="link_4" setID={setIdList} /> : false}
        </div>
      </Row>
      {link_4 == idList ? <ListLinks idl={idList}></ListLinks> : false}
      <Row className="rowMobile">
        <Nav.Link className="link">Элемент 5</Nav.Link>
        <div className="rightAlign">
          {link_5 ? <ArrowButton idn={link_5} key="link_5" setID={setIdList} /> : false}
        </div>
      </Row>
      {link_5 == idList ? <ListLinks idl={idList}></ListLinks> : false}
      <Row className="rowMobile">
        <Nav.Link className="link">Элемент 6</Nav.Link>
        <div className="rightAlign">
          {link_6 ? <ArrowButton idn={link_6} key="link_6" setID={setIdList} /> : false}
        </div>
      </Row>
      {link_6 == idList ? <ListLinks idl={idList}></ListLinks> : false}
    </Container>
  );

  return (
    <>
      {body}
      <div id="overlay" onClick={close()}></div>
    </>
  );
};
export default MenuMobileLayout;
