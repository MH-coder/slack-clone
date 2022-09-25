import './Chat.styles.scss'

import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { db } from '../../utils/firebase/firebase';
import { useState } from 'react';

import Message from './Message/Message.component';
import ChatInput from './ChatInput/ChatInput.component';

const Chat = () => {
    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId)
                .onSnapshot(snapshot => {
                    setRoomDetails(snapshot.data())
                })

            db.collection('rooms')
                .doc(roomId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) => (
                    setRoomMessages(snapshot.docs.map(doc => (doc.data())))
                ))

            // console.log(roomMessages);
        }
    }, [roomId])

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>

            <div className="chat__messages">
                {
                    roomMessages.map(({ message, timestamp, user, userImage }) => (
                        <Message key={timestamp} message={message} timestamp={timestamp} user={user} userImage={userImage} />
                    ))
                }
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat