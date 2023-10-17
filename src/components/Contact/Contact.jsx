import { useDeleteContactMutation } from 'redux/contactsSlice';
import { Item } from './Contact.styled';
import { Circles } from 'react-loader-spinner';

const Contact = ({ id, name, number,  }) => {
  const [onDelete, { isLoading }] = useDeleteContactMutation(id);

  return (
    <Item>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" disabled={isLoading} onClick={() => onDelete(id)}>
        {!isLoading && 'Delete'}
        {isLoading && (
          <Circles
            height="26"
            width="26"
            color="#a11aab"
            ariaLabel="circles-loading"
            wrapperStyle={{ bottom:"47%", left:"47%"}}
            wrapperClass=""
            visible={true}
          />
        )}
      </button>
    </Item>
  );
};
export default Contact;
