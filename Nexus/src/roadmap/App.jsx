import React from 'react'
import { useState} from 'react'
import './App.css'
import {Box,VStack, Center, HStack, Input,  FormControl, FormLabel, FormErrorMessage, FormHelperText} from '@chakra-ui/react'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



function App() {


  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

  return (
    <>

    <div>   

    <Box>
      <VStack spacing= '10'> 
{/*  This is the NavBar */}
    <Nav id = 'nav-bar' variant='underline' className="justify-content-center" activeKey="/roadmap/" > 
    <HStack spacing={10}>
    <Navbar.Brand href="/src/">
            <img
              src='/assets/NexusLogo.png'
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

{/*  This is the blogging area */}
    <Box> 
      <Center> <h1 id="headertxt">Updates</h1> </Center>




    </Box>



<Box>
  
  <h3 id='head'> Sign up for Updates </h3>



<Form>
<Form.Group  noValidate validated={validated} onSubmit={handleSubmit} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label id = 'txt'>Email </Form.Label>
        <Form.Control size="lg"  type="email" placeholder="name@example.com" />
        <Form.Control.Feedback  id = 'endtxt' type="invalid">
            Please provide a email address.
          </Form.Control.Feedback>

          

      </Form.Group>
      <p id = 'endtxt'>   Enter the email you'd like to receive the newsletter on. </p>
      <Center>
      <Button  type="submit" id="open-nexus" size="lg" variant="dark" > Sign Up </Button>{' '}

      </Center>

</Form>





     </Box>
      </VStack>
    </Box>





    <footer id = "footer"> Copyright © 2024 Nexus.  </footer>
    </div>


    </>
  )
}

export default App
