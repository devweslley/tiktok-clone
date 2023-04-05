import React, { useRef, useState, useEffect } from 'react'
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'
import { debounce } from '@mui/material'
import "./video.css"

function Video({likes, messages, shares, name, description, music, url}) {
    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handdleStart(){
        if(play){
            videoRef.current.pause()
            setPlay(false)
        } else {
            videoRef.current.play()
            setPlay(true)
        }
    }

    useEffect(() => {
    const handleScrollDebounced = debounce(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0; // Define o tempo de reprodução para 0 segundos
        videoRef.current.pause(); // Pausa a reprodução do vídeo
        //setPlay(false); // Atualiza o estado do botão de reprodução
      }
    }, 800);
  
    window.addEventListener("keydown", handleScrollDebounced);
    window.addEventListener("wheel", handleScrollDebounced); // Adiciona o ouvinte de evento para o evento "keydown"
  
    return () => {
      window.removeEventListener("keydown", handleScrollDebounced);
      window.addEventListener("wheel", handleScrollDebounced); // Remove o ouvinte de evento quando o componente é desmontado
    };
  }, []);
    
    return (
        <div className='video'>
            <video 
                className='video__player'
                ref={videoRef}
                onClick={handdleStart}
                loop
                src={ url }
            >   
            </video>
            <VideoSidebar 
                likes={likes}
                messages={messages}
                shares={shares}
            />
            <VideoFooter 
                name={name}
                description={description}
                music={music}
            />
        </div>
    )
}


export default Video
