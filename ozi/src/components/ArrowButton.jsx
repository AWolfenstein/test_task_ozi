import React, { useEffect, useState, useRef } from "react";
import { Button, Row, Nav, Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "../styles/MenuStyles.css";
import { links } from "../data/data";

export const ArrowButton = ({
  idn,
  setID,
  value,
  testState,
  setTestState,
  inS,
}) => {
  const openSubMenu = (e) => {
    e.preventDefault();
    setTestState({ ...inS, [value]: !testState });
    testState ? setID("") : setID(idn);
  };

  const iconArrow = testState ? (
    <Icon.ChevronUp size={26} />
  ) : (
    <Icon.ChevronDown size={26} />
  );
  return (
    <Button className="arrowHead" onClick={openSubMenu}>
      {iconArrow}
    </Button>
  );
};

export const ListLinks = ({ idl }) => {
  const [idList, setIdList] = useState("");

  const initialState = idl.map((link, index) => {
    const name = index + "_subbutton";
    return { ...index, [name]: false };
  });
  const [subList, setSubList] = useState(initialState);

  const body = (
    <div>
      {idl &&
        idl.map((link, index) => {
          const firstLevel = (
            <Row key={index + "_headlink"} className="rowHeadLink">
              <Nav.Link className="link">{link.headName}</Nav.Link>
              <div className="rightAlign">
                {link.sublinks ? (
                  <ArrowButton
                    key={index + "_subbutton"}
                    value={index + "_subbutton"}
                    testState={subList[index + "_subbutton"]}
                    setTestState={setSubList}
                    inS={initialState}
                    idn={link}
                    setID={setIdList}
                  />
                ) : (
                  false
                )}
              </div>
            </Row>
          );

          return (
            <>
              {firstLevel}

              {link.headLink == idList.headLink ? (
                <SubLevel List={idList.sublinks} />
              ) : (
                false
              )}
            </>
          );
        })}
    </div>
  );
  return body;
};
const SubLevel = ({ List }) => {
  const body = (
    <>
      {List &&
        List.map((links, index) => {
          return (
            <Row key={index + "_sublink"} className="rowLink">
              <Nav.Link className="link">{links.name}</Nav.Link>
            </Row>
          );
        })}
    </>
  );
  return body;
};
