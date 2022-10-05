import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import Title from 'components/Title/Title';
import s from '../ContactList/ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredArray = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => dispatch(deleteContact(id));

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
                <button className={s.btn} onClick={() => handleDelete(id)}>
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
