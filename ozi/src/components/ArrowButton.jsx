import React, { useState } from "react";
import { Button, Row, Nav } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "../styles/MenuStyles.css";


export const ArrowButton = ({
  idn,
  setID,
  id,
  buttonState,
  setButtonState,
  inS,
}) => {
  const openSubMenu = (e) => {
    e.preventDefault();
    setButtonState({ ...inS, [id]: !buttonState });
    buttonState ? setID("") : setID(idn);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const iconArrow = buttonState ? (
    <Icon.ChevronUp size={26} />
  ) : (
    <Icon.ChevronDown size={26} />
  );
  return (
    <Button className="arrowHead" id={id} onClick={openSubMenu}>
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
    <div id="Sublinks">
      {idl &&
        idl.map((link, index) => {
          const firstLevel = (
            <Row key={index + "_headlink"} className="rowHeadLink">
              <Nav.Link className="link">{link.headName}</Nav.Link>
              <div className="rightAlign">
                {link.sublinks ? (
                  <ArrowButton
                    key={index + "_subbutton"}
                    id={index + "_subbutton"}
                    buttonState={subList[index + "_subbutton"]}
                    setButtonState={setSubList}
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
