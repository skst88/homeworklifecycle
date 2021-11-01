import React, { useState, useContext } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { contactContext } from '../Context/ContactContext';


const AddContact = () => {

    let [contact, setContact] = useState({ name: "", phone: "", image: "", email: "" })
    const { createContact } = useContext(contactContext)

    function updateContacts(e) {
        let user = { ...contact, [e.target.name]: e.target.value }
        setContact(user)
    }

    function handleClick() {
        console.log(contact)
        createContact(contact)

        let user = { name: "", phone: "", image: "", email: "" }
        setContact(user)
    }

    return (
        <div>
            <FormControl style={{ width: '25rem' }}
                name="name" onChange={updateContacts}
                type="text" value={contact.name} placeholder="Name" />
            <br />
            <FormControl style={{ width: '25rem' }}
                name="phone" onChange={updateContacts}
                type="text" value={contact.phone} placeholder="Phone" />
            <br />
            <FormControl style={{ width: '25rem' }}
                name="image" onChange={updateContacts}
                type="text" value={contact.image} placeholder="Image URL" />
            <br />
            <FormControl style={{ width: '25rem' }}
                name="email" onChange={updateContacts}
                type="email" value={contact.email} placeholder="Email" />
            <Button variant="danger" className='btn-1' onClick={handleClick}>Add Contact</Button>
        </div >
    );
};

export default AddContact;
