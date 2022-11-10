import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';

const Searchbox = () => {
    return (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Order Id: </Form.Label>
            <Form.Control type="text" placeholder="Search transactions by Order ID..." />
          </Form.Group>
          <Button variant="primary" type="submit" className="primary">
            Submit
          </Button>
        </Form>
      );
}

export default Searchbox;