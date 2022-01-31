import styled from 'styled-components'
import {ReactComponent as Logo} from '../logo.svg';
import bgHeader from '../bg-pattern-header.svg'
import SwitchLight from './SwitchLight'
import FormFilters from './FormFilter'

import {Link} from 'react-router-dom'

const Header = () => {
  let accueil = document.location.pathname === '/'

  const handleClick = () => {
  }
  return <Container>

      <img onClick={handleClick} className="top-image" src={bgHeader} alt="" />

    <Link to='/'>
      <Logo />
    </Link>
        <SwitchLight />
        { accueil&& <FormFilters /> }

    </Container>
}

const Container = styled.header`
    position:fixed;
    display:flex;
    align-items:${() => document.location.pathname==='/'?'flex-end':'center'};

    flex-wrap:wrap;
    padding:0 max(20px, calc((100vw - 1200px)/2));
    top:0;
    z-index:2;
    height:150px;
    width:100vw;
    img{
      display:block;
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      z-index:-1;
    }
`
export default Header
