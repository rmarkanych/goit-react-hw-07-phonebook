import { useDispatch, useSelector } from 'react-redux';
//import { deleteContact } from 'redux/contactsSlice';
import Title from 'components/Title/Title';
import s from '../ContactList/ContactList.module.css';
import { deleteNewContact } from 'redux/operations';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  console.log('contacts', contacts);

  const filteredArray = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  //const handleDelete = id => dispatch(deleteContact(id));

  return (
    <div className={s.wrapper}>
      {filteredArray.length < 1 ? (
        <Title title="Add new contact to your list ⬆" />
      ) : (
        <ul className={s.list}>
          {filteredArray.map(({ id, name, number }) => {
            return (
              <li className={s.item} key={id}>
                <p>
                  {name}: {number}
                </p>
                <button
                  className={s.btn}
                  onClick={() => dispatch(deleteNewContact(id))}
                >
                  Delete 🗑
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
