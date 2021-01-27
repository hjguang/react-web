const Media = require("../models/media.model");
const users = require('./../data/users.json')
const mongoose =require('mongoose')
let gridfs = null;

mongoose.connection.on('connected',()=>{
  gridfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db);
})

const mediaByID = async (req, res, next, id) => {
  try{
    let media = await Media.findById(id).populate('postedBy', '_id name').exec()
    if (!media)
      return res.status('400').json({
        error: "Media not found"
      })
    req.media = media
    let files = await gridfs.find({filename:media._id}).toArray()
    if (!files[0]) {
      return res.status(404).send({
        error: 'No video found'
      })
    }
    req.file = files[0]
    next()
  }catch(err) {
    return res.status(404).send({
      error: 'Could not retrieve media file'
    })
  }
}

const video = (req,res) =>{
  const range = req.header['range']
  if (range && typeof range === "string") {
    const parts = range.replace(/bytes=/, "").split("-")
    const partialstart = parts[0]
    const partialend = parts[1]
    const start = parseInt(partialstart, 10)
    const end = partialend ? parseInt(partialend, 10) : req.file.length - 1
    const chunksize = (end - start) + 1
    res.writeHead(206, {
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Range': 'bytes ' + start + '-' + end + '/' + req.file.length,
      'Content-Type': req.file.contentType
    })
    let downloadStream = gridfs.openDownloadStream(req.file._id,{start, end: end+1})
    downloadStream.pipe(res)
    downloadStream.on('error', () => {
      res.sendStatus(404)
    })
    downloadStream.on('end', () => {
      res.end()
    })
  } else {
     res.header('Content-Length', req.file.length)
     res.header('Content-Type', req.file.contentType)

    let downloadStream = gridfs.openDownloadStream(req.file._id)
    downloadStream.pipe(res)
    downloadStream.on('error', () => {
      res.sendStatus(404)
    })
    downloadStream.on('end', () => {
      res.end()
    })
  }
}
const listPopular = async (req,res) => {

    let medias = await Media.find({}).limit(9).populate('postedBy', '_id name').exec();
     res.status(200).json(medias)

}

const read = (req, res) => {
  return res.json(req.media)
}

module.exports = {
  listPopular,
  mediaByID,
  video,
  read
}

