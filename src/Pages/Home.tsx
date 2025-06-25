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
                  <p>
                    {
                      [
                        "System Uptime",
                        "Tested in Extreme Cold",
                        "Emergency Support",
                        "Energy Efficiency Rating",
                      ][i]
                    }
                  </p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-white text-center">
        <Container>
          <h2 className="fw-bold mb-5 text-primary">Our Core HVAC Services</h2>
          <Row className="gy-4">
            {[
              { title: "Heat Pump Installation", icon: "🔥" },
              { title: "Ductless A/C Systems", icon: "❄️" },
              { title: "Smart Thermostat Setup", icon: "📱" },
              { title: "Ductwork Design & Fabrication", icon: "🛠️" },
            ].map((service, i) => (
              <Col md={3} sm={6} key={i}>
                <motion.div
                  className="hvac-card"
                  whileHover={{ scale: 1.08 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <Card className="shadow border-0 p-3 hvac-service-card">
                    <div className="hvac-icon mb-3 fs-1">{service.icon}</div>
                    <Card.Title className="fw-bold">{service.title}</Card.Title>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="bg-light py-5">
        <Container>
          <h2 className="fw-bold text-center mb-5">How We Work</h2>
          <div className="process-timeline">
            {[
              "In-Home Evaluation",
              "System Design",
              "Installation",
              "Testing & Optimization",
              "Ongoing Maintenance",
            ].map((step, i) => (
              <motion.div
                className="process-step"
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="process-circle">{i + 1}</div>
                <p>{step}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-5 bg-white text-center">
        <Container>
          <h3 className="fw-bold mb-4 text-success">Certified & Trusted</h3>
          <Row className="justify-content-center gy-4">
            {[
              { label: "BBA Certified", icon: "🏆" },
              { label: "Energy Star Partner", icon: "⚡" },
              { label: "Licensed & Insured", icon: "✅" },
            ].map((badge, i) => (
              <Col md={3} sm={6} key={i}>
                <motion.div
                  className="trust-badge p-4 rounded shadow-sm"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="fs-1 mb-2">{badge.icon}</div>
                  <strong>{badge.label}</strong>
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
                  We don’t just power your comfort — we protect your
                  environment. Winter Wolf uses cutting-edge technologies to
                  reduce emissions and maximize energy savings.
                </p>
                <Button variant="outline-light">
                  Discover Our Green Solutions
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-white text-center">
        <Container>
          <h2 className="fw-bold mb-4">Smart Home Integration</h2>
          <p className="lead mb-5">
            Seamlessly connect your HVAC system with Alexa, Google Home, or
            mobile apps to manage climate from anywhere.
          </p>
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
<section className="py-5 bg-air-quality text-white text-center position-relative">
  <Container>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="fw-bold mb-3 display-5">Air Quality Monitoring</h2>
      <p className="lead mb-5">
        Our smart systems track pollutants, humidity, and allergens in real time — empowering you to breathe cleaner, healthier air every day.
      </p>
    </motion.div>
    <motion.div
      className="air-quality-card mx-auto p-4 shadow-lg rounded"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
    >
      <img
        src="/airquality.png"
        alt="Air Quality System"
        className="img-fluid rounded air-quality-img"
      />
    </motion.div>
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
