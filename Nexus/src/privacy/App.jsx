import React from 'react'
import './App.css'
import {Box,VStack, Center, HStack, Button,Container, Spacer } from '@chakra-ui/react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';

function App() {

  return (
    <>

    <div>   

    <Box>
      <VStack spacing= '10'> 
{/*  This is the NavBar */}
    <Nav id = 'nav-bar' variant='underline' className="justify-content-center" activeKey="/privacy/"> 
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
    <Nav.Item >
                 <Nav.Link  id = 'nav' href="/products/">Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                 <Nav.Link  id = 'nav' href="/enterprise/">Enterprise</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                 <Nav.Link  id = 'nav' href="/privacy/">Privacy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                 <Nav.Link  id = 'nav' href="/support/">Support</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                 <Nav.Link  id = 'nav' href="/roadmap/">Updates</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                 <Nav.Link  id = 'nav' href="/careers/">Careers</Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Button id = "open-nexus" px= '1' placement = 'right '>  Open Nexus</Button>
            </Nav.Item>
    </HStack>
           
            </Nav>
     

    
      <Center>
      <h1 id= "headertxt"> Products</h1>

      </Center>
      

   
      <Container id= "left" >
        <h1> Software Engineer</h1>
      </Container>
      <Spacer />

      <Container id= "right" >
        <h1> Web Dev </h1>
      </Container>
      <Spacer />

      <Container id= "left" >
        <h1> App Dev</h1>
        
      </Container>
      <Spacer />

      <Container id= "right" >
        <h1>Machine Learning </h1>
      </Container>
      <Spacer />

      </VStack>
    </Box>





    <footer id = "footer"> Copyright © 2024 Nexus.</footer>
    </div>


    </>
  )
}

export default App
