import React, {useState } from "react";
import { Container, Row, Nav } from "react-bootstrap";
import "../styles/MenuStyles.css";
import { ArrowButton, ListLinks } from "./ArrowButton";
import { links } from "../data/data";
const MenuMobileLayout = ({ close }) => {
  const [idList, setIdList] = useState("");
  const initialState = {
    element_1: false,
    element_2: false,
    element_3: false,
    element_4: false,
    element_5: false,
    element_6: false,
  };
  const [buttonState, setButtonState] = useState(initialState);

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
          {link_1 ? (
            <ArrowButton
              idn={link_1}
              key="link_1"
              id="element_1"
              setID={setIdList}
              buttonState={buttonState.element_1}
              setButtonState={setButtonState}
              inS={initialState}
            />
          ) : (
            false
          )}
        </div>
      </Row>
      {link_1 == idList ? <ListLinks idl={idList}></ListLinks> : false}
      <Row className="rowMobile">
        <Nav.Link className="link">Элемент 2</Nav.Link>
        <div className="rightAlign">
          {link_2 ? (
            <ArrowButton
              idn={link_2}
              key="link_2"
              id="element_2"
              setID={setIdList}
              buttonState={buttonState.element_2}
              inS={initialState}
              setButtonState={setButtonState}
            />
          ) : (
            false
          )}
        </div>
      </Row>
      {link_2 == idList ? <ListLinks idl={idList}></ListLinks> : false}
      <Row className="rowMobile">
        <Nav.Link className="link">Элемент 3</Nav.Link>
        <div className="rightAlign">
          {link_3 ? (
            <ArrowButton
              idn={link_3}
              key="link_3"
              id="element_3"
              setID={setIdList}
              buttonState={buttonState.element_3}
              setButtonState={setButtonState}
            />
          ) : (
            false
          )}
        </div>
      </Row>
      {link_3 == idList ? <ListLinks idl={idList}></ListLinks> : false}
      <Row className="rowMobile">
        <Nav.Link className="link">Элемент 4</Nav.Link>
        <div className="rightAlign">
          {link_4 ? (
            <ArrowButton
              idn={link_4}
              key="link_4"
              id="element_4"
              setID={setIdList}
              buttonState={buttonState.element_4}
              setButtonState={setButtonState}
            />
          ) : (
            false
          )}
        </div>
      </Row>
      {link_4 == idList ? <ListLinks idl={idList}></ListLinks> : false}
      <Row className="rowMobile">
        <Nav.Link className="link">Элемент 5</Nav.Link>
        <div className="rightAlign">
          {link_5 ? (
            <ArrowButton
              idn={link_5}
              key="link_5"
              id="element_5"
              setID={setIdList}
              buttonState={buttonState.element_5}
              setButtonState={setButtonState}
            />
          ) : (
            false
          )}
        </div>
      </Row>
      {link_5 == idList ? <ListLinks idl={idList}></ListLinks> : false}
      <Row className="rowMobile">
        <Nav.Link className="link">Элемент 6</Nav.Link>
        <div className="rightAlign">
          {link_6 ? (
            <ArrowButton
              idn={link_6}
              key="link_6"
              id="element_6"
              setID={setIdList}
              buttonState={buttonState.element_6}
              setButtonState={setButtonState}
            />
          ) : (
            false
          )}
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
