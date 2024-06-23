import React, { useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { navItems } from "../../Utils/Menu";

const HeaderNav = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /sectors/research on initial render if the path is /our-work
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
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className="container_main">
          <div>
            <img src="/rawa_logos.png" alt="updated logo" className="updated_logo" />
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
    </Navbar>
  );
}

export default HeaderNav;
