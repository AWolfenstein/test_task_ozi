import React, { useEffect, useState, useRef } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import MenuLayout from "./MenuLayout";
import "../styles/NavStyles.css";
import { links } from "../data/data";
const NavBar = () => {
  const sizeIcon = 26;
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [currId, setCurrId] = useState("");
  const [urls, setUrls] = useState("");
  const link_1 = useRef(null);
  const link_2 = useRef(null);
  const link_3 = useRef(null);
  const link_4 = useRef(null);
  const link_5 = useRef(null);
  const link_6 = useRef(null);

  const ifToggle = (num) => {
    setShow(num);
  };
  const iconToggle = show ? (
    <Icon.X color="#FFC618" size={sizeIcon} />
  ) : (
    <Icon.List size={sizeIcon} />
  );

  const showingHoverMenu = (evt) => {
    const ids = evt.target.id;
    setCurrId(ids);
    setUrls(links[ids]);
    setShowMenu(true);
  };
  const closeMenu = () => {
    setCurrId("");
    setShowMenu(false);
  };
  const isShowMenu = showMenu ? (
    <MenuLayout a={urls} closeMenu={() => closeMenu} />
  ) : (
    false
  );
  const showFun = (event) => {
    event.persist();
    showingHoverMenu(event);
  };
  const active_1 = link_1.current && link_1.current.id === currId;
  const active_2 = link_2.current && link_2.current.id === currId;
  const active_3 = link_3.current && link_3.current.id === currId;
  const active_4 = link_4.current && link_4.current.id === currId;
  const active_5 = link_5.current && link_5.current.id === currId;
  const active_6 = link_6.current && link_6.current.id === currId;
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        onToggle={ifToggle}
        style={{ zIndex: "20" }}
      >
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle className="border-0">{iconToggle}</Navbar.Toggle>
        <Navbar.Collapse className="nav-elements" id="basic-navbar-nav">
          <Nav>
            <Nav.Link
              className="topnav"
              id="link_1"
              active={active_1}
              ref={link_1}
              onMouseEnter={showFun}
            >
              Элемент 1
            </Nav.Link>
            <Nav.Link
              className="topnav"
              id="link_2"
              active={active_2}
              ref={link_2}
              onMouseEnter={showFun}
            >
              Элемент 2
            </Nav.Link>
            <Nav.Link
              className="topnav"
              id="link_3"
              active={active_3}
              ref={link_3}
              onMouseEnter={showFun}
            >
              Элемент 3
            </Nav.Link>
            <Nav.Link
              className="topnav"
              id="link_4"
              active={active_4}
              ref={link_4}
              onMouseEnter={showFun}
            >
              Элемент 4
            </Nav.Link>
            <Nav.Link
              className="topnav"
              id="link_5"
              active={active_5}
              ref={link_5}
              onMouseEnter={showFun}
            >
              Элемент 5
            </Nav.Link>
            <Nav.Link
              className="topnav"
              id="link_6"
              active={active_6}
              ref={link_6}
              onMouseEnter={showFun}
            >
              Элемент 6
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {isShowMenu}
    </>
  );
};
export default NavBar;
