import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Email = () => {
    const [person, setPerson] = useState({
        email: "",
        password1: "",
        password2: "",
        show: true,
    })

    function handleChange(e) {
        let personn = { ...person, [e.target.name]: e.target.value }
        setPerson(personn)
    }
    let showsmth;
    if (person.show) {
        showsmth = (
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        name="password1"
                        type="password1"
                        placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        name="password2"
                        type="password2"
                        placeholder="Confirm password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    } else {
        showsmth = (
            <div>
                {person.email}
                <button onClick={() => logout()}>Logout</button>
            </div>
        )
    }
    function handleLogIn(e) {
        e.preventDefault();
        if (person.password1 === person.password2) {
            let personn = { ...person, show: false }
            setPerson(personn)
        }
    }
    function logout() {
        let personn = { email: "", password1: "", password2: "", show: true }
        setPerson(personn)
    }
    return (
        <div>
            {showsmth}
        </div>
    );
};

export default Email;