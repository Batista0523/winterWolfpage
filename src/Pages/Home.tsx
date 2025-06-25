import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useRef } from "react";
import "../style/Home.css";

function Home() {
  const ref = useRef(null);



  return (
    <div className="home-page" ref={ref}>
      <section className="hero-hvac text-white">
        <motion.div
          className="hero-bg"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        <motion.div
          className="hero-overlay"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </section>

      <section className="py-5 bg-dark text-white text-center">
        <Container>
          <Row className="gy-4">
            {["99.9%", "-40°F", "24/7", "18 SEER+"].map((value, i) => (
              <Col md={3} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <h2 className="display-6 text-info">{value}</h2>
                  <p>{["System Uptime", "Tested in Extreme Cold", "Emergency Support", "Energy Efficiency Rating"][i]}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-white text-center">
        <Container>
          <h2 className="fw-bold mb-4">Core HVAC Services</h2>
          <Row className="gy-4">
            {["Heat Pump Installation", "Ductless A/C Systems", "Smart Thermostat Setup", "Ductwork Design & Fabrication"].map((service, i) => (
              <Col md={3} key={i}>
                <motion.div
                  className="service-card"
                  whileHover={{ scale: 1.05, rotateX: 5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Card.Title>{service}</Card.Title>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="bg-light py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">Our Process</h2>
          <Row className="timeline text-center">
            {["1. In-Home Evaluation", "2. System Design", "3. Installation", "4. Testing & Optimization", "5. Ongoing Maintenance"].map((step, i) => (
              <Col key={i}>
                <motion.div
                  className="timeline-step"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <span className="circle">{i + 1}</span>
                  <p>{step}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-white text-center">
        <Container>
          <h3 className="fw-bold mb-4">Certified & Trusted</h3>
          <Row className="justify-content-center">
            {["BBA Certified", "Energy Star Partner", "Licensed & Insured"].map((badge, i) => (
              <Col md={3} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="badge-box p-3 border rounded shadow-sm">
                    <strong>{badge}</strong>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-dark text-white">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <motion.img
                src="/ecotech.png"
                alt="Eco Tech"
                className="img-fluid rounded shadow-sm"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </Col>
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="fw-bold mb-3">Eco-Friendly HVAC Solutions</h3>
                <p>
                  We don’t just power your comfort — we protect your environment. Winter Wolf uses cutting-edge technologies to reduce emissions and maximize energy savings.
                </p>
                <Button variant="outline-light">Discover Our Green Solutions</Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-white text-center">
        <Container>
          <h2 className="fw-bold mb-4">Smart Home Integration</h2>
          <p className="lead mb-5">Seamlessly connect your HVAC system with Alexa, Google Home, or mobile apps to manage climate from anywhere.</p>
      <motion.img
  src="/smartHome.png"
  alt="Smart Home HVAC"
  className="img-fluid rounded shadow smart-home-img"
  initial={{ scale: 0.9, opacity: 0 }}
  whileInView={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1 }}
/>

        </Container>
      </section>

      <section className="py-5 bg-light text-center">
        <Container>
          <h2 className="fw-bold mb-4">Air Quality Monitoring</h2>
          <p className="lead mb-5">Our systems provide real-time insights into your indoor air quality to help you breathe better and live healthier.</p>
          <motion.img
            src="/airquality.png"
            alt="Air Quality Monitor"
            className="img-fluid rounded shadow"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </Container>
      </section>

      <section className="cta-glass text-white text-center py-5">
        <Container>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Upgrade Your Comfort with Technology That Performs
          </motion.h2>
          <p>Let Winter Wolf Tech transform your air system today.</p>
          <Button variant="light" size="lg">
            Request Free Consultation
          </Button>
        </Container>
      </section>
    </div>
  );
}

export default Home;