import styled from 'styled-components'
import Main from './components/Main'
import Offer from './pages/Offer'
import { useSelector } from 'react-redux'
import {colors} from './styles/setting'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const dark = useSelector(state => state.dark.value)

  return (
    <Container dark={dark}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path='offer/:offerId' element={<Offer />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.div`
  position:relative;
  background:${props => props.dark?colors.dark.background:colors.light.background};
  color:${( {dark} )=>dark?colors.dark.fontcolor:colors.light.fontcolor};
  overflow:hidden;
  min-height:100vh;
  transition:.2s;
`
export default App;
