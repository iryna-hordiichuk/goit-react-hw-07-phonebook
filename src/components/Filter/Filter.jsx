import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { useFilter } from '../../redux/hooks';
import { Container } from 'components/Container';
import { FilterInput, FilterLabel } from './Filter.styled';
import { nanoid } from 'nanoid';


export const Filter = ({ icon: Icon = null }) => {
  const idForFilter = nanoid();
  const dispatch = useDispatch();
  const filter = useFilter();

  return (
    <Container
      as="div"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <FilterLabel htmlFor={idForFilter}>
        {<Icon size={16} />} Find contacts by name
      </FilterLabel>
      <FilterInput
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        id={idForFilter}
      />
    </Container>
  );
};

