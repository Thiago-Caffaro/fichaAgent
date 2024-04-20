import './App.css'
import { useRef, useState } from 'react'

function App() {
  const audioRef = useRef();
  const imageRef = useRef();
  const [imageSrc, setImageSrc] = useState("");

  function playAudio(){
    audioRef.current.play();
  }
  const stopAudio = () => {
    audioRef.current.pause(); // Pausa o áudio
    audioRef.current.currentTime = 0; // Volta o áudio para o início
  };


  const showImage = (direction) =>{
    if (direction == "left"){
      setImageSrc("/fichaAgente/images/left.gif")
      imageRef.current.style.height = "400px";
    }
    else{
      setImageSrc("/fichaAgente/images/right.jpeg")
      imageRef.current.style.height = "400px";
    }
  }

  return (
    <div id='mainContainer'>
      <div id='header'>
        <h1>INFORMAÇÕES DO AGENTE</h1>
        <audio ref={audioRef} src="/fichaAgente/audios/morse.mp3" />
        <div id='audioBtn'>
          <img src="/fichaAgente/icons/play.png" onClick={playAudio}/>
          <img src="/fichaagente/icons/stop.png" onClick={stopAudio}/>
        </div>
      </div>
      <div id='main'>
        <div id='buttons'>
          <button className='choiceBtn' id='leftBtn' onClick={() => showImage('left')}>
            <img src="/fichaAgente/icons/file.png" />
          </button>
          <button className='choiceBtn' id='rightBtn' onClick={() => showImage('right')} >
            <img src="/fichaagente/icons/file.png"/>
          </button>
        </div>
      </div>
      <div id='theImage' >
        <img src={imageSrc} ref={imageRef}/>
      </div>
    </div>
  )
}

export default App
