import React, { useState, useContext } from 'react';
import { Modal, FormControl, Button } from 'react-bootstrap';
import { contactContext } from '../Context/ContactContext';

const EditModal = (props) => {

    const { updateContact } = useContext(contactContext)


    let [name, setName] = useState(props.contact.name)
    let [phone, setPhone] = useState(props.contact.phone)
    let [image, setImage] = useState(props.contact.image)
    let [email, setEmail] = useState(props.contact.email)



    function handleSaveClick() {
        let users = {
            name,
            phone,
            image,
            email,
        }
        updateContact(users, props.contact.id)
        props.handleClose()
        setName('')
        setPhone('')
        setImage('')
        setEmail('')

    };
    return (
        <Modal show={props.show} onHide={props.handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body><FormControl style={{ width: '15rem' }}
                value={name} onChange={(e) => setName(e.target.value)}
                type="text" placeholder="Name" />
                <br />
                <FormControl style={{ width: '15rem' }}
                    value={phone} onChange={(e) => setPhone(e.target.value)}
                    type="text" placeholder="Phone" />
                <br />
                <FormControl style={{ width: '15rem' }}
                    value={image} onChange={(e) => setImage(e.target.value)}
                    type="text" placeholder="Image URL" />
                <br />
                <FormControl style={{ width: '15rem' }}
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    type="email" placeholder="Email" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveClick}>
                    Edit contact
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditModal;