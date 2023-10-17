import Contact from 'components/Contact/Contact';
import { List } from './Contacts.styled';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <Contact
        key={id}
          id={id}
          name={name}
          number={phone}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
};


