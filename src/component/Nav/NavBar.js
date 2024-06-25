import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RxDropdownMenu } from "react-icons/rx";
import "./navbar.css";
import { navItems } from "../../Utils/Menu";

const HeaderNav = () => {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/our-work") {
      navigate("/sectors/research");
    }
  }, [navigate]);

  const handleNavClick = (href) => {
    if (href === "/our-work") {
      navigate("/sectors/research");
    } else {
      navigate(href);
    }
    // setOpenNav(false);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className="container_main">
          <div>
            <img src="/rawa_logos.png" alt="updated logo" className="updated_logo" />
          </div>
          <div className="dropdown_icon_container">
            <RxDropdownMenu className="dropdown_icon" onClick={() => setOpenNav(!openNav)} />
          </div>
          <div className="navHeader">
            {navItems.map((item, index) => (
              <Nav.Link
                key={index}
                className={item.className}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </Nav.Link>
            ))}
          </div>
        </div>
      </Container>
      {openNav && (
        <div className="mobile_nav">
          {navItems.map((item, index) => (
            <Nav.Link
              key={index}
              className={item.className}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </Nav.Link>
          ))}
        </div>
      )}
    </Navbar>
  );
}

export default HeaderNav;
