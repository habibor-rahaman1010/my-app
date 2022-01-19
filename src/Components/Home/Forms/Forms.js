import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import UseAuthContext from '../../../Hooks/UseAuthContext';

const Forms = () => {
    const { users, setUsers } = UseAuthContext();
    const imageRef = useRef();
    const nameRaf = useRef();
    const emailRaf = useRef();
    const phoneRaf = useRef();

    const handleAddUser = (e) => {
        const image = imageRef.current.value;
        const name = nameRaf.current.value;
        const email = emailRaf.current.value;
        const phone = phoneRaf.current.value;

        const newUser = {
            image: image,
            name: name,
            email: email,
            phone: phone,
        }

        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then((data) => {
                const newUser = [...users, data];
                setUsers(newUser);
            });
        imageRef.current.value = null;
        nameRaf.current.value = null;
        emailRaf.current.value = null;
        phoneRaf.current.value = null;

        e.preventDefault();
    };
    console.log(users)
    const clear = () => {
        const reSetUser = users.slice(0, 14);
        setUsers(reSetUser);
    }
    return (
        <Container>
            <Form onSubmit={handleAddUser}>
                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Image url</Form.Label>
                    <Form.Control ref={imageRef} type="url" placeholder="Enter image url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRaf} type="text" placeholder="Enter name" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRaf} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control ref={phoneRaf} type="text" placeholder="Enter phone" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> <br />

            <Button onClick={clear}>Clear Data New Addeed Users</Button>
        </Container>
    );
};

export default Forms;