import { useState } from 'react'
import './App.css'

function App() {
  return <>
    <CardComponent name={"Shubham"} 
    description={"web dev enthusiast"} 
    interests={["learning react","learning js","learning fullstack"]} 
    linkedin={"https://www.linkedin.com"} 
    twitter = {"https://twitter.com/"}
    />
  </>
}

function CardComponent({name,description,interests,linkedin,twitter}) {

  return <div className='card'>
    <h2 className='name'>{name}</h2>
    <p className='description'>{description}</p>
    <h3 className='interests'>Interests</h3>
    <ul>{interests.map((interest) => {
        return <li key={interest} className='list-items' >{interest}</li>
      })}
    </ul>
    <div className='links'>
      <a href={linkedin} target="_blank">Linkedin</a> 
      <a href={twitter} target="_blank">Twitter</a>
    </div>
  </div>
  
}

export default App

