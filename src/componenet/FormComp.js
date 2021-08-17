import React from 'react'
import { Button, Form } from 'react-bootstrap'

const FormComp = () => {
    return (
        <div style={{maxWidth:"450px",margin:"100px auto",backgroundColor:"#87CEEB",padding:"70px",borderRadius:"10px",borderBottom:"solid 4px #333"}}>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button style={{backgroundColor:"#20B2AA"}}  type="submit">
    Submit
  </Button>
</Form>
    
        </div>
    )
}

export default FormComp
