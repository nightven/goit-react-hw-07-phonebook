
import { useAddContactMutation } from 'redux/contactsSlice';
import { Form } from './Phonebook.styled';


import { useState } from 'react';
import toast from 'react-hot-toast';



export const Phonebook = ({contacts}) => {
  
  const[addContact ] =useAddContactMutation();
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  //set state on input change
  const onChangeInput = evt => {
    if (evt.target.name === 'name') setName(evt.target.value);
    if (evt.target.name === 'number') setNumber(evt.target.value);
  };

  //submit form
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const newContact = { name, number };
   
    form.reset();
  
   // checking for the presence of this contact
  if (contacts.some(({ name }) => newContact.name === name)) {
    return alert(`${newContact.name} is already in contacts list`);
  }
  addContact(newContact);
  toast.success('Contact successfully added')
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          required
          
          placeholder="Enter name"
          onChange={onChangeInput}
        />
        <p>Number</p>
        <input
          type="tel"
          name="number"
          required
         
          placeholder="Enter number 123-45-67"
          onChange={onChangeInput}
        />
        <button type="submit">Add contact</button>
      </Form>
    </>
  );
};
