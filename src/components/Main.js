import React, { useState , useEffect} from "react"
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Header from './Header'

import { useSelector } from 'react-redux'
import {colors} from '../styles/setting'


const Main = () => {
  const [contents, setContents] = useState("")
  const filter = useSelector((state) => state.filter.value)

  useEffect(() => {
    fetch(`/data.json`)
      .then(res => res.json())
      .then(res => setContents(res))
  }, [])

  
  return <>
  <Header />
  <Container>
    {contents&&contents
        .filter(content => content.position.toUpperCase()
          .includes(filter.name.toUpperCase()))
        .filter(content=> content.location.toUpperCase()
          .includes(filter.location.toUpperCase()))
        .filter(content => !filter.fulltime || content.contract==='Full Time' )
      .map((content,_index) => <Card 
              key={_index}
              {...content}

       />)}

      
    </Container>
  </>
}

const Container = styled.main`
  display:flex;
  flex-wrap:wrap; 
  gap:20px;
  width:100vw;
  justify-content:center;
  padding:50px max(20px, calc((100vw - 1200px)/2));
  padding-top:250px;

`

const Card = props => {
  const dark = useSelector(state => state.dark.value)

  return <CardContainer dark={dark} color={props.logoBackground}>
    <img src={props.logo} alt="" />
    <h2 className="subtitle">{props.postedAt} . {props.contract}</h2>
    <h1 className='title'>
      <Link to={ `/offer/${props.id}` }>
        {props.position}
      </Link>
    </h1>
    <div className='company'>{props.company}</div>
    <div className='location'>{props.location}</div>
  </CardContainer>
}

const CardContainer = styled.article`
  display:flex;
  flex-direction:column;
  flex:300px ;
  flex-basis:300px;
  position:relative;
  border-radius:5px;
  height:200px;
  background-color:${props => props.dark?colors.dark.components:colors.light.components};
  padding:0 1em;
  transition:.2s background-color;
  img{
    display:inline-block;
    position:relative;
    transform:translate(50%, -30%);
    background-color:${props => props.color};
    aspect-ratio:1;
    width:2.9em;
    padding:.4em;
    border-radius:10px;
    object-fit:contain;
  }
  .subtitle{
    color:gray;
    font-size:.9em;
    font-weight:lighter;
  }
  .title{
    margin-top:1em;
    font-weight:bold;
    a{
      color:inherit;
      text-decoration:inherit;
    }
  }
  .company{
    margin-top:auto;
    color:gray;
    font-weight:lighter;
  }
  .location{
    color:royalblue;
    margin-bottom:1em;
    font-weight:bold;
  }
`
export default Main

