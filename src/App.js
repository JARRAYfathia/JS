import logo from './logo.svg';
import { Button, Form, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2> Let's connect!  </h2>
      
    <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Adress" />
  </Form.Group>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control placeholder="Your city" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control placeholder="Your state">
      </Form.Control>
    </Form.Group>

   
  </Form.Row>
  <Form.Row>
    <Form.Label column="lg" lg={2}>
      Send us your feedback!
    </Form.Label>
    <Row>
      <Form.Control size="100px" type="text" placeholder="How was your experience?" />
    </Row>
  </Form.Row>

  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        How would you describe your experience:
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Great"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Good"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Okay"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
        <Form.Check
          type="radio"
          label="Poor"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>

  <Form.Group>
    <Form.File id="exampleForm" label="Put your projects" />
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalCheck">
    <Col sm={{ span: 10 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
