// importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import dbPassword from './dbPassword.js'
import Pusher from 'pusher'
import cors from 'cors'

// app config
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
  appId: "1144085",
  key: "18498135bf65421bad6d",
  secret: "4d80183e1c115592b955",
  cluster: "eu",
  useTLS: true
});

// middleware
app.use(express.json())
app.use(cors())

// DB config
const connection_url = 'mongodb+srv://admin:'+dbPassword+'@cluster0.lkgyy.mongodb.net/whatsappdb?retryWrites=true&w=majority'

console.log(connection_url);

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser:true,
  useUnifiedTopology:true
})

const db = mongoose.connection

db.once('open', ()=>{
  console.log('db connected')

  const msgCollection = db.collection('messagecontents')
  const changeStream = msgCollection.watch()
  changeStream.on('change', (change)=>{
    console.log('change')
    if(change.operationType === 'insert'){
      const messageDetails = change.fullDocument;
      pusher.trigger('messages', 'inserted',
      {
        name:messageDetails.name,
        message:messageDetails.message,
        timestamp:messageDetails.timestamp
      })
      console.log('pusher - moze')
    }else{
      console.log('Error triggering pusher')
    }
    
  })
})

// ??

// api routes
app.get('/', (req, res)=>res.status(200).send('hello world'))

app.get('/messages/sync', (req, res)=>{
  Messages.find((err,data)=>{
    if(err){
      res.status(500).send(err)
    }else{
      res.status(200).send(data)
    }
  })
})

app.post('/messages/new', (req, res) =>{
  const dbMessage = req.body
  Messages.create(dbMessage, (err,data) =>{
    if(err){
      res.status(500).send(err)
    }else{
      res.status(201).send(data)
    }
  })
})

// listen
app.listen(port, ()=>console.log('Listening on localhost:${port}'))
