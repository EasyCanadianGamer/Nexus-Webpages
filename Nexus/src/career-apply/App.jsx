import React from "react";
import "./App.css";
import {
  Box,
  VStack,
  Center,
  HStack,
  Stack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
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
            <h1 id="headertxt" > Join Us</h1>
          </Center>

          <Stack spacing="10">
            <FormControl isRequired>
              <Form.Label id="txt">Full Name</Form.Label>
              <Form.Control type="email" placeholder="John Doe" />
            </FormControl>

            <FormControl isRequired>
              <Form.Label id="txt">Email address</Form.Label>
              <Form.Control type="email" placeholder="johndoe@example.com" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel id="txt">
                {" "}
                Select which Job you are applying for
              </FormLabel>

              <Form.Select aria-label="Default select example">
                <option>Select Below</option>
                <option value="1">Frontend Developer</option>
                <option value="2">Backend Developer</option>
                <option value="3">AI/ML Engineer (NLP, LLM)</option>
                <option value="3">Cybersecurity Engineer</option>
                <option value="3">Cloud Engineer (AWS)</option>
              </Form.Select>
            </FormControl>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label id="txt">Upload your resume:</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Button variant="dark" type="submit"> Submit </Button>{''}
          </Stack>
        </VStack>
      </Box>
      <footer id="footer">Copyright © 2024 Nexus.</footer>
    </>
  );
}
export default App;
