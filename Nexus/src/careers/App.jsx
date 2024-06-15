import React from "react";
import "./App.css";
import {
  Box,
  VStack,
  Center,
  HStack,
  Container,
  Spacer,
} from "@chakra-ui/react";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <>
      <Box>
        <VStack spacing="10">
          {/* This is the NavBar */}
          <Nav
            id="nav-bar"
            variant="underline"
            className="justify-content-center"
            activeKey="/careers/"
          >
            <HStack spacing={10}>
              <Navbar.Brand href="/src/">
                <img
                  src="/assets/NexusLogo.png"
                  width="60"
                  height="60"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Nav.Item>
                {" "}
                <Nav.Link id="nav" href="/roadmap/">
                  Updates
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link id="nav" href="/careers/">
                  Careers
                </Nav.Link>
              </Nav.Item>
            </HStack>
          </Nav>
          <Center>
            {" "}
            <h1 id="headertxt">Careers</h1>{" "}
          </Center>
          <Container id="center">
            {" "}
            <h2 id='y'>Why Work at Nexus?</h2>
            <p >
              {" "}
              At Nexus, we are committed to fostering a dynamic and inclusive
              work environment. Our team is dedicated to pushing the boundaries
              of innovation and delivering top-notch solutions for our clients.
              Join us to be part of a forward-thinking company that values
              collaboration, creativity, and professional growth.{" "}
            </p>
          </Container>
          <Spacer />
          <Container id="center">
            <h2 id ='vals'>Our Values</h2>
            <p>
              {" "}
              At the core of our company culture are values that guide us in
              everything we do. We believe in integrity, excellence, and
              teamwork. Our goal is to create a workplace where every employee
              feels valued and empowered to contribute to our shared success.{" "}
            </p>
          </Container>
          <Spacer />
          <Container id="center">
            {" "}
            <h2 id ='opp'>Opportunities for Growth</h2>{" "}
            <p>
              {" "}
              Nexus offers numerous opportunities for career advancement. We
              invest in our employees' professional development through training
              programs, mentorship, and challenging projects that enhance their
              skills and expertise.{" "}
            </p>
          </Container>{" "}
          <Spacer />
          <Container id="center">
            {" "}
            <h2 id="join">Join Us</h2>{" "}
            <p>
              {" "}
              If you are passionate about technology and innovation, and looking
              for a place to grow your career, Nexus is the perfect place for
              you. Explore our current openings and join a team that is shaping
              the future of the industry.{" "}
            </p>{" "}
          </Container>{" "}
          <Spacer />

          <Button id="open-nexus" size="lg" variant="dark" href="/career-apply/">Work with us</Button>
        </VStack>
      </Box>
      <footer id="footer">Copyright © 2024 Nexus.</footer>
    </>
  );
}
export default App;
