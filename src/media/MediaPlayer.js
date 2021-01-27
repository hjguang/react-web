import React, {useState, useEffect, useRef} from 'react'
import screenfull from 'screenfull'
import ReactPlayer from "react-player";

export default function MediaPlayer(props) {

  const [playing, setPlaying] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  useEffect(()=>{

  },[])
  return (
    <div>
      <ReactPlayer url={props.srcUrl} controls
      />
    </div>
  )
}