import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import {read} from './api-media.js'
import Media from './Media'

export default function PlayMedia(props) {

  let [media, setMedia] = useState({postedBy: {}})
  useEffect(()=>{
    const abortController = new AbortController()
    const signal = abortController.signal

    read({mediaId: props.match.params.mediaId}, signal).then((data) => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        setMedia(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [props.match.params.mediaId])

  return (
    <div>
      <Grid container spacing={8}>
        <Grid item xs={8} sm={8}>
          <Media media={media} />
        </Grid>
      </Grid>
    </div>
  )
}