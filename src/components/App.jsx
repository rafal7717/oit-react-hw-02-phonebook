import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  setContacts = ({name, number}) => {
    const {contacts} = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some(c => c.name === name)) {
      alert(`${name} is already in contacts`);
    } else if ((contacts.some(c => c.number === number))) {
      const contactWithNumber = contacts.filter(c => c.number === number);
      alert(`Number ${contactWithNumber[0].number} is already in phonebook. It belongs to ${contactWithNumber[0].name}.`);
    } else {
      this.setState(({contacts}) => ({
        contacts: [newContact, ...contacts],
      }));
    }
  }

  setFilter = (evt) => {
    const value = evt.target.value.toLowerCase();
    this.setState(({filter: value}));
  }

  getContacts = () => {
    const {contacts, filter} = this.state;
    return contacts.filter(c => c.name.toLowerCase().includes(filter)).sort((a, b) => a.name.localeCompare(b.name));
  }

  deleteContact = (id) => () => {
    this.setState(({contacts}) => ({contacts: contacts.filter(c => c.id !== id)}));
  }

  render() {
    const getContacts = this.getContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          setContacts={this.setContacts}
        />
        <h2>Contacts</h2>
        <Filter setFilter={this.setFilter}/>
        <ContactList
          contacts={getContacts}
          deleteContact={this.deleteContact}
        />
      </>
    )
  }
}

export default App;
