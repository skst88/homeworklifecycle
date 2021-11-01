import React, { useContext, useEffect, useState } from 'react';
import { contactContext } from '../Context/ContactContext';
import Сard from "./Сard"

const ContactList = () => {
    const { getAllContacts, contacts } = useContext(contactContext)

    useEffect(getAllContacts, [])


    return (
        <div className='container d-flex flex-wrap '>

            {
                contacts.map((item, index) => (
                    <Сard item={item} />
                ))
            }


        </div>
    );
};

export default ContactList;