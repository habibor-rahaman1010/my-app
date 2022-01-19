import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import UseAuthContext from '../../Hooks/UseAuthContext';
import Forms from './Forms/Forms';

const Home = () => {
    const { users } = UseAuthContext();

    return (
        <Container>
            <div className='w-50 m-auto p-5'>
                <Forms></Forms>
            </div>
            <h1>Total Users Here: {users.length} </h1>
            <Row xs={1} md={4} className="g-4 py-5">
                {
                    users.map((user) => {
                        return (
                            [
                                <Col key={user.id}>
                                    <Card>
                                        <Card.Img variant="top" src={user.image} />
                                        <Card.Body>
                                            <Card.Title>{user.name}</Card.Title>
                                            <Card.Text>
                                                {user.email} <br />
                                                {user.phone}
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ]
                        )
                    })
                }
            </Row>
        </Container>
    );
};

export default Home;