import { Container, Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
import { navItems } from "../../Utils/Menu";
function HeaderNav() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className="container_main">
          <div><img src="/rawa_logos.png" alt="updated logo" className="updated_logo"/></div>
          <div className="navHeader">
          {navItems.map((item, index) => (
                  <Nav.Link key={index} href={item.href} className={item.className}>
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
