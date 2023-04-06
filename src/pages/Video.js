import React, { useRef, useState, useEffect } from 'react'
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'
import { debounce } from '@mui/material'
import "./video.css"

function Video({likes, messages, shares, name, description, music, url, Profile}) {
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

    // FUNÇÃO PLAY/PAUSE AO ROLAR A PÁGINA
    useEffect(() => { 
        const handleVideoEnded = () => { 
          videoRef.current.pause(); 
        }; 
       
        const handleScrollDebounced = debounce(() => { 
          if (videoRef.current) { 
            videoRef.current.currentTime = 0; 
            videoRef.current.pause(); 
          }  
        }, 300); 
       
        const videos = document.querySelectorAll("video"); 
       
        videos.forEach(video => { 
          video.addEventListener("ended", handleVideoEnded); 
        }); 
       
        window.addEventListener("keydown", handleScrollDebounced); 
        window.addEventListener("wheel", handleScrollDebounced); 
        window.addEventListener("touchmove", handleScrollDebounced); 
       
        return () => { 
          videos.forEach(video => { 
            video.removeEventListener("ended", handleVideoEnded); 
          }); 
       
          window.removeEventListener("keydown", handleScrollDebounced); 
          window.removeEventListener("wheel", handleScrollDebounced); 
          window.removeEventListener("touchmove", handleScrollDebounced); 
        }; 
      }, []);
  // FUNÇÃO PLAY/PAUSE AO ROLAR A PÁGINA 
    
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
                Profile={ Profile }
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
