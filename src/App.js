import React, {useEffect, useState} from 'react';
import Navbar  from './components/Navbar/Navbar';
import PageButtoms from './components/PageButtoms/PageButtoms';
import Characters  from './components/Character/Characters'

function App() {
  const [characters, setCharacters] = useState ([])
  const [info, setInfo] = useState([])

  const URI = "https://rickandmortyapi.com/api/character"

  const getCharacters = (URI) => {
    fetch(URI)
    .then((response) => response.json())
    .then ((data) => {
      /*console.log(data.results)*/
      //console.log(data.info)
      setCharacters(data.results) //equivalente a caracters =data.results
      setInfo(data.info) 
    })
    .catch()
  }
  
  /*Manejadores de eventos*/
  const onPrevious = () => {
    getCharacters(info.prev)
  }
  const onNext = () => {
    getCharacters(info.next)
  }

  return (
  <>
    <Navbar />
    <div>
      <PageButtoms />
      {/* Bodey las tarjetas*/}
      <Characters characterList = {characters} />
      <PageButtoms />
    </div>
  </>
  );
}

export default App;
