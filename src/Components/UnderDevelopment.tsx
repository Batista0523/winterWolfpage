import { Container, Row, Col, Button } from "react-bootstrap";
import { FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import "../style/UnderDevelopment.css";

function UnderDevelopment() {
  return (
    <section className="under-dev-section text-center py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="under-dev-box"
            >
              <FaTools size={60} className="mb-3 text-warning" />
              <h2 className="fw-bold">This Page is Under Development</h2>
              <p className="lead text-muted">
                We’re working hard to bring this section to life. Please check
                back soon for updates and new features.
              </p>
              <p className="mt-3 text-dark fw-semibold">
                If you need further assistance, feel free to visit our main site:
              </p>
              <Button
                variant="primary"
                size="lg"
                href="https://batistack.com/"
                target="_blank"
                className="mt-2"
              >
                Go to Batistack.com
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default UnderDevelopment;
