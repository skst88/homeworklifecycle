import React, { useState, useContext } from 'react';
import EditModal from './EditModal'
import { Card, Button } from 'react-bootstrap';
import { contactContext } from '../Context/ContactContext';


const Сard = (props) => {
    const { deleteContact } = useContext(contactContext)


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card
                className='cards'
                key={props.item.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.item.image} />
                <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Text>{props.item.phone}</Card.Text>
                    <Card.Text>{props.item.email}</Card.Text>
                    <Button className='btn-card' variant="secondary" onClick={() => deleteContact(props.item.id)}>Delete</Button>
                    <Button variant="primary" onClick={handleShow}>
                        Edit contact
                    </Button>
                </Card.Body>
            </Card>
            <EditModal handleClose={handleClose}
                show={show} contact={props.item}
            />
        </>
    );
};

export default Сard;