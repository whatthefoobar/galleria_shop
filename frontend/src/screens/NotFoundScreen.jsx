import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundScreen = () => {
  return (
    <Container className='mt-5'>
      <Card>
        <Card.Body>
          <Card.Title>Page Not Found</Card.Title>
          <Card.Text>The page you are looking for does not exist.</Card.Text>
          <Link to='/'>
            <Button variant='primary'>Go to Home</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default NotFoundScreen;
