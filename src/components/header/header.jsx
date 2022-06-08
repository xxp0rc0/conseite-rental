import React, {useState} from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownItem, NavbarText, DropdownMenu  } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Footer from '../footer/footer';
import Cart from '../Cart/Cart';
import { Button } from 'antd/lib/radio';

const Header = () => {
    
    const [drawer, setDrawer] = useState(false);
    const [totalProduct, setTotalProduct] = useState(0);
    const toggle = () => setDrawer(!drawer);
    const navi = {
      borderBottom: "solid 2px black",
    };
  return (
    <>
      <div>
        <Navbar
          expand="md"
          light
          style={{
            borderBottom: "solid 2px black",
            height: "5rem",
            backgroundColor: "#FCF9EE",
          }}
        >
          <NavbarBrand
            href="/"
            style={{
              borderBottom: "solid 3px black",
              borderTop: "solid 3px black",
              padding: "0",
              fontWeight: "700",
              marginLeft: "1.5vw",
            }}
          >
            Conseite
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar style={{ paddingLeft: "3vw" }}>
              <NavItem className="navi">
                <NavLink
                  to="/brands"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "1rem",
                    padding: "5px 10px",
                  }}
                >
                  brands
                </NavLink>
              </NavItem>
              <NavItem className="navi">
                <NavLink
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "1rem",
                    padding: "5px 10px",
                  }}
                >
                  blog
                </NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle
                  caret
                  nav
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "1rem",
                    padding: "5px 10px",
                  }}
                >
                  shopping
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/products"
                    >
                      cameras
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/products"
                    >
                      lens
                    </NavLink>{" "}
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/products"
                    >
                      tripod
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav style={{ marginRight: "30px" }}>
              <NavItem style={{ marginRight: "20px" }}>
                {/* <Button
                  className="navi"
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={toggle}
                >
                  cart
                </Button> */}
                <Cart drawer={drawer} toggle={toggle} />
              </NavItem>
              <NavItem>
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "500",
                  }}
                  to="https://github.com/reactstrap/reactstrap"
                >
                  log in
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header