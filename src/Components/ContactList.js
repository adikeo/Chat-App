import React from 'react';
import Contact from './Contact';

const contacts = [
    {
        name: "Charles Weston",
        avatar: "https://randomuser.me/api/portraits/men/58.jpg",
    },
    {
        name: "Micheal Murphy",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    {
        name: "Norman Marshall",
        avatar: "https://randomuser.me/api/portraits/men/95.jpg",
    },
];

const ContactList = () => (
    <div>
        {contacts.map(contact => (<Contact name={contact.name} avatar={contact.avatar} online={contact.online} />))}
    </div>
);

export default ContactList;