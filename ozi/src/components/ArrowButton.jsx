import React, { useEffect, useState, useRef } from "react";
import { Button, Row, Nav, Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "../styles/MenuStyles.css";
import { links } from "../data/data";

export const ArrowButton = ({ idn, setID }) => {
  const [click, setClick] = useState(false);

  const openSubMenu = (e) => {
    setClick(!click);
    click ? setID("") : setID(idn);
  };
  const iconArrow = click ? (
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
  const [list, setList] = useState("");

  const body = (
    <div>
      {idl &&
        idl.map((link, index) => {
          const firstLevel = (
            <Row key={index + "_headlink"}>
              <Nav.Link className="link">{link.headName}</Nav.Link>
              <div className="rightAlign">
                {link.sublinks ? (
                  <ArrowButton
                    key={index + "_subbutton"}
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
            <Row key={index + "_sublink"}>
              <Nav.Link className="link">{links.name}</Nav.Link>
            </Row>
          );
        })}
    </>
  );
  return body;
};
