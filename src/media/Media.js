import React from 'react'
import Card from '@material-ui/core/Card'
import MediaPlayer from './MediaPlayer'
import ReactPlayer from "react-player";

export default function Media(props) {

  const mediaUrl = props.media._id
    ? `/api/media/video/${props.media._id}`
    : null
  return (
    <Card>
      <ReactPlayer url={mediaUrl} controls     />
    </Card>
  )
}