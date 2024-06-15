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
    <Nav id = 'nav-bar' variant='underline' className="justify-content-center" activeKey="/src/"> 
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
                 <Nav.Link  id = 'nav' href="/roadmap/">Updates</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                 <Nav.Link  id = 'nav' href="/careers/">Careers</Nav.Link>
            </Nav.Item>
    </HStack>
           
            </Nav>
     

    
      <Center>
      <h1 id= "headertxt"> NexusDevops</h1>

      </Center>
      

   
      <Container id= "left" >
        <h1 id='Deveco'> Development Ecosystem</h1>
      <p id='txt'> An all-in-one toolkit for software development.
         It includes programming tools, version control, automated testing, CI/CD pipelines, and cloud services. 
         Streamline workflows, improve code quality, and boost productivity.</p>


      </Container>
      <Spacer />

      <Container id= "right" >
        <h1 id='Collab'> Collaborative Functions </h1>
        <p id='txt-right'> A comprehensive solution for seamless collaboration in software development. 
          It integrates communication tools, project management, version control, and real-time code editing. 
          Enhance teamwork and streamline workflows.</p>
      </Container>
      <Spacer />

      <Container id= "left" >
        <h1 id='PM'> Project Management</h1>
        <p id='txt'>An ultimate tool for organizing and tracking projects.
           It offers task management, scheduling, resource allocation, and progress tracking—all in one place.
            Simplify workflows, ensure timely delivery, and enhance team productivity.</p>
        
      </Container>
      <Spacer />

      <Container id= "right" >
        <h1 id = 'DevCommunity'>Developer Driven Community </h1>
        <p id='txt-right'> A platform for connecting with fellow developers. 
          Share knowledge, collaborate on projects, and access resources and support. 
          Enhance your skills and stay updated with the latest trends in a vibrant, developer-centric environment.</p>
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
