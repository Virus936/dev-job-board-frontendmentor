import styled from 'styled-components';
import { ReactComponent as Search } from '../icon-search-purple.svg';
import { ReactComponent as Location } from '../icon-location.svg';

import { useSelector, useDispatch } from 'react-redux';
import { location, name, fulltimetoggle } from '../features/filter/filterSlice';
import { colors } from '../styles/setting';

const FormFilters = () => {
  const filter = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.dark.value);

  return (
    <Container dark={dark}>
      <div className="input-content">
        <label htmlFor="title">
          <Search />
        </label>
        <input
          type="text"
          value={filter.name}
          placeholder="Filter by title..."
          onChange={(e) => dispatch(name(e.target.value))}
          id="title"
        />
      </div>
      <div className="input-content">
        <label htmlFor="location">
          <Location />
        </label>
        <input
          type="text"
          value={filter.location}
          id="location"
          placeholder="Filter by location..."
          onChange={(e) => dispatch(location(e.target.value))}
        />
      </div>
      <div className="input-content">
        <input
          type="checkbox"
          id="time"
          checked={filter.fulltime}
          onChange={() => dispatch(fulltimetoggle())}
        />
        <label className="checkbox" htmlFor="time"></label>
        <p>Full Time</p>
      </div>
    </Container>
  );
};
const Container = styled.form`
  display: flex;
  width: 100vw;

  gap: 1px;

  position: relative;
  height: 80px;
  transform: translateY(50%);

  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 10px 20px 2px ${(props) => (props.dark ? 'black' : 'lightgrey')};
  background-color: ${(props) => (props.dark ? 'rgb(50,50,50)' : 'gainsboro')};
  transition: 0.2s;
  > * {
    display: flex;
    align-items: center;
    flex: 1;
    background-color: ${(props) =>
      props.dark ? colors.dark.components : colors.light.components};
    transition: 0.2s;
    label {
      margin: 0.5em;
    }

    input[type='text'] {
      background: transparent;
      color: ${(props) =>
        props.dark ? colors.dark.fontcolor : colors.light.fontcolor};
      outline: none;
      width: 100%;
      height: 100%;
    }
    input[type='checkbox'] {
      display: none;
      + label {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 2em;
        aspect-ratio: 1;

        border-radius: 4px;

        background-color: gainsboro;
      }
      :checked {
        + label {
          background-color: royalblue;
          :after {
            content: '✔️';
            color: white;
          }
        }
      }
    }
  }
`;
export default FormFilters;
