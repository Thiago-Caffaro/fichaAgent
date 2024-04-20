import './App.css'
import { useRef, useState } from 'react'

function App() {
  const audioRef = useRef();
  const imageRef = useRef();
  const mainRef = useRef();

  const imageSize = "530px"
  const [imageSrc, setImageSrc] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true)
  }
  const stopAudio = () => {
    audioRef.current.pause(); // Pausa o áudio
    audioRef.current.currentTime = 0; // Volta o áudio para o início
    setIsPlaying(false)

  };


  const showImage = (direction) =>{
    mainRef.current.style.width = "1400px";
    if (direction == "left"){
      setImageSrc("/fichaAgent/images/J1.png")
      imageRef.current.style.height = imageSize;
    }
    else{
      setImageSrc("/fichaAgent/images/S1.png")
      imageRef.current.style.height = imageSize;
    }
  }

  return (
    <div id='mainContainer' ref={mainRef}>
      <div id='header'>
        <h1>INFORMAÇÕES DO AGENTE</h1>
        <audio ref={audioRef} src="/fichaAgent/audios/AUDIO_SOPA.mp3" />
        <div id='audioBtn'>
          <img src="/fichaAgent/icons/play.png" onClick={playAudio}/>
          <img id='stopBtn'
           style={isPlaying ? {height: '60px'} : {height: '0px', padding: '0px', border: '0px'}}
           src="/fichaAgent/icons/stop.png" onClick={stopAudio}/>
        </div>
      </div>
      <div id='main'>
        <div id='buttons'>
          <button className='choiceBtn' id='leftBtn' onClick={() => showImage('left')}>
            <img src="/fichaAgent/icons/file.png" />
          </button>
          <button className='choiceBtn' id='rightBtn' onClick={() => showImage('right')} >
            <img src="/fichaAgent/icons/file.png"/>
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
