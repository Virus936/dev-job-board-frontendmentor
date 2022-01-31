import React, {useState, useEffect} from 'react'


import Header from '../components/Header'
import styled from 'styled-components'

import {colors, sizes} from '../styles/setting'
import {useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const url = 'http://localhost:3000/'

const Offer = () => {
  const [firm, setFirm] = useState({})

  let {offerId} = useParams()
  useEffect(() => {
    fetch(`${url}data.json`)
      .then(res => res.json())
      .then(res => res.filter(r => r.id === offerId))
      .then(res => setFirm(res[0]))
  },[])

  return <>
    <Header />
    <OfferContainer {...firm}/>
  </>
}


const OfferContainer = (props) => {
  const dark = useSelector( state => state.dark.value )
  return  <Container color={props.logoBackground} dark = {dark}>
    <header>
      <img src={'.'+props.logo} alt="" />
      <h1>{props.company}</h1>
      <a className='sitelink' href={props.website}>{ props.website }</a>
      <a className="siteButton" href={props.website}>Company Site</a>
    </header>
    <div className='description'>
      <h2> {props.postedAt} . {props.contract}</h2>
      <h1>{props.position}</h1>
      <h3>{props.location}</h3>
      <a className='buttonApply' href={props.apply}>Apply Now</a>
      <p>{props.description}</p>
      <h1>Requirements</h1>
      <p>{props.requirements?.content}</p>
      <ul>
        {props.requirements?.items.map((req,_index) => <li key={_index}> 
          {req}
        </li>)}
      </ul>
      <h1>What You Will Do</h1>
      <p>{props.role?.content}</p>
      <ol>
        {props.role?.items.map((req,_index) => <li key={_index}>{req}
        </li>)}
      </ol>

    </div>
  </Container>
}

const Container = styled.div`
  margin:auto;
  margin-top:170px;
  max-width:700px;
  padding:40px 30px;
  &>*{
    margin-bottom:2em;
    border-radius:.5em;
    padding: 10px 20px;
    background-color:${props => props.dark?colors.dark.components:colors.light.components};
    transition:.2s;
  }
  header{
    display:flex;
    flex-direction:column;
    align-items:center;
    img{
      display:inline-block;
      position:relative;
      background-color:${props => props.color};
      aspect-ratio:1;
      width:4.9em;
      padding:.4em;
      border-radius:10px;
      object-fit:contain;
      transform:translateY(-50%);
    }
    .sitelink{
      color:grey;
      text-decoration:none;
    }
    .siteButton{
      display:inline-block;
      background-color:${props => props.dark?'rgb(50,50,80)':'rgb(230,230,244)'};
      padding:.5em 2em;
      margin-top:1em;
      color:${props => props.dark?'snow':'black'};
      transition:.2s;
      font-weight:bold;
      border-radius:.3em;
      cursor:pointer;
      user-select:none;
      text-decoration:none;
    }
    @media(min-width:${sizes.bigScreen}){
      display:grid;
      grid-template-columns: auto 1fr auto auto;
      grid-template-rows:1fr 1fr ;
      padding:0;
      grid-gap:0 20px;
      img{
        transform:translateY(0);
        grid-row:span 2;
        border-radius:0;
      }
      .sitelink{
        grid-column-start:2;
        align-self:start;
      }
      h1{
        align-self:end;
      }
      .siteButton{
        align-self:center;
        margin:0;
        grid-column:3;
        grid-row:1/3;
      }
    }
  }
  .description{
    line-height:30px;
    &>*{
      margin-bottom:.8em;
    }
    h1{
      font-size:1.2em;
      font-weight:bold;
    }
    h2{
      color:grey;
      font-weight:lighter;
    }
    h3{
      font-size:1em;
      color:royalblue;
    }
    a.buttonApply{
      display:inline-block;
      background:mediumblue;
      color:snow;
      font-weight:bold;
      border-radius:5px;
      padding:1em;
      text-decoration:inherit;
      width:100%;
      text-align:center;
      user-select:none;
    }
    p{
      color:${props => props.dark? colors.dark.pfontcolor:colors.light.pfontcolor};
      font-weight:normal;
    }

    ol{
      list-style:inside decimal;
    }
    ul{
      list-style:inside;
    }
    li{
      color:${props => props.dark? colors.dark.pfontcolor:colors.light.pfontcolor};
    }
  }
`
export default Offer
