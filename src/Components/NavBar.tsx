import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../style/NavBar.css";
import { IoChevronBackOutline } from "react-icons/io5";
function NavBar() {
  const [showServices, setShowServices] = useState(false);

  const handleMouseEnter = () => setShowServices(true);
  const handleMouseLeave = () => setShowServices(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      className="shadow-sm"
      onMouseLeave={handleMouseLeave}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          ❄️ Winter Wolf Tech
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <div
              className="services-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Nav.Link as="span" style={{ cursor: "pointer" }}>
                Services
              </Nav.Link>

              <AnimatePresence>
                {showServices && (
                  <motion.div
                    className="services-dropdown"
                    style={{
                      position: "fixed",
                      top: "70px",
                      right: "10%",
                      transform: "translateX(-50%)",
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMobile && (
                      <div
                        className="back-button"
                        onClick={() => setShowServices(false)}
                      >
                        <IoChevronBackOutline
                          size={20}
                          style={{ marginRight: 6 }}
                        />
                        Back
                      </div>
                    )}

                    <div className="dropdown-section">
                      <h6>Heating</h6>
                      <Link to="/services/heat-pump-installation">
                        Heat Pump Installation
                      </Link>
                      <Link to="/services/heat-pump-services">
                        Heat Pump Services
                      </Link>
                      <Link to="/services/hyper-heat">Hyper Heat</Link>
                      <Link to="/services/heat-pump-maintenance">
                        Pump Maintenance
                      </Link>
                      <Link to="/services/gas-furnace-repair">
                        Gas Furnace Repair
                      </Link>
                    </div>

                    <div className="dropdown-section">
                      <h6>Cooling</h6>
                      <Link to="/services/cooling-service">
                        Cooling Service
                      </Link>
                      <Link to="/services/ductless-cooling">
                        Ductless Cooling
                      </Link>
                      <Link to="/services/ducted-cooling">Ducted Cooling</Link>
                      <Link to="/services/mini-split-installation">
                        Mini Split Installation
                      </Link>
                      <Link to="/services/ac-service">A/C Service</Link>
                    </div>

                    <div className="dropdown-section">
                      <h6>Ductworks</h6>
                      <Link to="/services/duct-design">Design</Link>
                      <Link to="/services/duct-fabrication">Fabrication</Link>
                      <Link to="/services/duct-installation">Installation</Link>
                    </div>

                    <div className="dropdown-section">
                      <h6>Commercial</h6>
                      <Link to="/services/commercial-ductless">
                        Ductless Installation
                      </Link>
                      <Link to="/services/commercial-ducted">
                        Ducted Installation
                      </Link>
                      <Link to="/services/commercial-maintenance">
                        Maintenance
                      </Link>
                      <Link to="/services/whole-building">Whole Building</Link>
                      <Link to="/services/retail-office">
                        Retail & Office HVAC
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Nav.Link as={Link} to="/case-studies">
              Case Studies
            </Nav.Link>
            <Nav.Link as={Link} to="/resources">
              Resources
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
