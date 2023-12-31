import { GlobalStyle } from './GlobalStyle';
import { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { FilterField } from './FilterField/Filter';



export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    };

    const contact = {
      ...newContact,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  }
  // - Filter -
  onFilter = value => {
    this.setState({
      filter: value,
    });
  };

  getFilterdContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
  };


  // - Delete -
  
  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };
  

  render() {
    const { contacts, filter } = this.state;
    const filterdContacts = this.getFilterdContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <FilterField filter={filter} onChange={this.onFilter} />
        {contacts.length > 0 && (
          <ContactsList
            contacts={filterdContacts}
            onDelete={this.deleteContact}
          />
        )}
        
        <GlobalStyle/>
      </>
    )
  }
}
