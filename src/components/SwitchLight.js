import styled from 'styled-components'
import {ReactComponent as Sun} from './icon-sun.svg'
import {ReactComponent as Moon} from './icon-moon.svg'

import { useSelector, useDispatch } from 'react-redux'

import { darktoggle, setDark,setLight} from '../features/dark/darkSlice'

function SwitchLight(){
  
  const dark = useSelector((state) => state.dark.value)
  const dispatch = useDispatch()

  return(
    <Container dark={dark} >
      <Sun onClick={()=>dispatch(setLight())} />
      <div className="toggle-container" onClick={()=>dispatch(darktoggle())} >
        <span className="toggle-button"> </span>
      </div>
      <Moon onClick={()=>dispatch(setDark())} />
      
    </Container>
    )
}


const Container = styled.div`
  position:relative;
  display:flex;
  align-items:center;
  margin-left:auto;
  cursor:pointer;
  .toggle-container{
    position:relative;
    display:flex;
    
    height:20px;
    aspect-ratio:2;
    border-radius:100vh;
    background:white;
    margin:0 10px;
    transition:1s;

    .toggle-button{
      height:100%;
      aspect-ratio:1;
      border-radius:100vh;
      border:white solid 4px;
      background:royalblue;
      transform:translateX(${props => props.dark?'100%':'0'});
      transition:.3s;

    }
  }
`
export default SwitchLight
