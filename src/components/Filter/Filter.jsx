import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import Title from 'components/Title/Title';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Title title="Find contacts by name" />
      <label>
        <input
          type="text"
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </label>
    </>
  );
};

export default Filter;
