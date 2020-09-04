import React, { Component } from "react";
import {
  Button,
  Card,
  Form,
  FormControl,
  ListGroup,
  Navbar,
  Modal,
  InputGroup,
  Nav,
  Jumbotron,
  ListGroupItem,
} from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }

  submitPost() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            The Best Social Media Platform
          </Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search Posts</Button>
          </Form>
        </Navbar>

        <Jumbotron className="text-center">
          <h1>Hello, Gabriel!</h1>
          <p>
            Welcome to the best social media platform , make your first post by
            clicking the button!
          </p>
          <p>
            <Button variant="primary" onClick={() => this.handleModal()}>
              Create Post
            </Button>
          </p>
        </Jumbotron>
        <Modal show={this.state.show}>
          <Modal.Header>Create a new post</Modal.Header>
          <Modal.Body>
            <InputGroup>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </InputGroup>
            <InputGroup>
              <Form.Group controlId="textArea">
                <Form.Label>Share your thoughts</Form.Label>
                <Form.Control as="textarea" rows="4" cols="50" />
              </Form.Group>
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => this.submitPost()}>
              Submit Post
            </Button>
          </Modal.Footer>
        </Modal>

        <ListGroup variant="flush">
          <ListGroup.Item>
            <Card style={{ justifyContent: "space-between" }}>
              <Card.Body>
                <Card.Title as="h5">
                  Gabriel
                  <Button
                    style={{
                      flex: 1,
                      flexDirection: "row-reverse",
                      marginLeft: 25,
                    }}
                  >
                    Delete Post
                  </Button>
                </Card.Title>

                <Card.Text>
                  Hello I am updating my status to let everyone know about the
                  new platform.
                </Card.Text>
                <footer className="blockquote-footer">
                  <cite title="Source Title">gabriel.d.albu@gmail.com</cite>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Leave a comment"
                      aria-label="Leave a comment"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary">Comment</Button>
                    </InputGroup.Append>
                  </InputGroup>
                </footer>
              </Card.Body>

              <ListGroup horizontal variant="flush">
                <Card.Title as="h5" style={{ margin: 20 }}>
                  Comments
                </Card.Title>
                <ListGroup.Item>
                  <Card style={{ marginLeft: 20, width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>John Doe</Card.Title>
                      <Card.Text>
                        Well great to connect Gabe, Ill be your first commenter!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card
                    style={{ marginLeft: 20, marginBottom: 20, width: "18rem" }}
                  >
                    <Card.Body>
                      <Card.Title>Jane Snow</Card.Title>
                      <Card.Text>Wow Welcome!</Card.Text>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card
                    style={{ marginLeft: 20, marginBottom: 20, width: "18rem" }}
                  >
                    <Card.Body>
                      <Card.Title>Jake Row</Card.Title>
                      <Card.Text>Row Row Row your boat!</Card.Text>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
                <ListGroupItem></ListGroupItem>
              </ListGroup>
            </Card>
          </ListGroup.Item>
          <ListGroup.Item>
            <Card style={{ justifyContent: "space-between" }}>
              <Card.Body>
                <Card.Title as="h5">
                  John Snow
                </Card.Title>

                <Card.Text>
                 Finally got rid of the long hair, I was siting in a throne at the new barbeshop called Games. Epic cut!
                </Card.Text>
                <footer className="blockquote-footer">
                  <cite title="Source Title">snowy.john@gmail.com</cite>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Leave a comment"
                      aria-label="Leave a comment"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary">Comment</Button>
                    </InputGroup.Append>
                  </InputGroup>
                </footer>
              </Card.Body>

              <ListGroup horizontal variant="flush">
                <Card.Title as="h5" style={{ margin: 20 }}>
                  Comments
                </Card.Title>
                <ListGroup.Item>
                  <Card style={{ marginLeft: 20, width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>John Doe</Card.Title>
                      <Card.Text>
                       Nooooo, you and aquaman was having a solid competition!!!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card
                    style={{ marginLeft: 20, marginBottom: 20, width: "18rem" }}
                  >
                    <Card.Body>
                      <Card.Title>Glodie Too</Card.Title>
                      <Card.Text>Great to see you move in to the city!</Card.Text>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card
                    style={{ marginLeft: 20, marginBottom: 20, width: "18rem" }}
                  >
                    <Card.Body>
                      <Card.Title>Snow White </Card.Title>
                      <Card.Text>Where can I find aa good tan salon?!</Card.Text>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
                <ListGroupItem></ListGroupItem>
              </ListGroup>
            </Card>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default App;
