import React from 'react'
import './Chat.css'
import {Avatar, IconButton} from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>Ime Prezime</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                  <span className="chat__name">
                      Viktor
                  </span>
                  This is a message
                  <span className="chat__timestamp">
                    {
                      new Date().toUTCString()
                    }
                  </span>
                </p>
                <p className="chat__message">
                  <span className="chat__name">
                      Viktor
                  </span>
                  This is a message
                  <span className="chat__timestamp">
                    {
                      new Date().toUTCString()
                    }
                  </span>
                </p>
                <p className="chat__message chat__reciever">
                  <span className="chat__name">
                      Viktor
                  </span>
                  This is a message
                  <span className="chat__timestamp">
                    {
                      new Date().toUTCString()
                    }
                  </span>
                </p>
            </div>
            <div className="chat__footer">
              <InsertEmoticonIcon />
              <form>
                <input placeholder="Type a message" type="text" />
                <button type="submit">Send a message</button>
              </form>
              <MicIcon />
            </div>

        </div>
    )
}

export default Chat