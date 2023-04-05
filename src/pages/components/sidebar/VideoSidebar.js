import React, { useState } from 'react'
import "./videoSidebar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({likes, messages, shares}) {

    const [liked, setLiked] = useState(false)

    function handdleLike() {
        setLiked(!liked)
    }

  return (
    <div className='videoSidebar'>
        <div>
            <img className='imgProfile' src="https://firebasestorage.googleapis.com/v0/b/tiktok---jclone.appspot.com/o/imgProfile.jpg?alt=media&token=1af14447-d470-46ac-bb8a-5ab9b826a55e" alt='Perfil' />
        </div>
        <div className='videoSidebar__options' onClick={handdleLike}>
            { liked ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/>}
            <p>{ liked ? likes + 1 : likes }</p>
        </div>
        <div className='videoSidebar__options'>
            <ChatIcon fontSize='large'/>
            <p>{ messages }</p>
        </div>
        <div className='videoSidebar__options'>
            <ShareIcon fontSize='large'/>
            <p>{ shares }</p>
        </div>
    </div>
  )
}

export default VideoSidebar