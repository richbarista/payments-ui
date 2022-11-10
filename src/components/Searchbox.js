import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Searchbox = () => {
    return (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Order Id: </Form.Label>
            <Form.Control type="text" placeholder="Search transactions by Order ID..." />
          </Form.Group>
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Form>
      );
}

export default Searchbox;