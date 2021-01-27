import React, {useState, useEffect} from "react";
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import MediaList from "../media/MediaList";
import {listPopular} from '../media/api-media'

export default function Home() {

  const [media, setMedia] = useState([])
  useEffect(()=>{
    const abortController = new AbortController()
    const signal = abortController.signal
    listPopular(signal).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setMedia(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  },[])
  return (
    <Card>
      <Typography variant="h2">
        Popular Videos
      </Typography>
      <MediaList media={media}/>
    </Card>
  )
}