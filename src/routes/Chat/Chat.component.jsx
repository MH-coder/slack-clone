import './Chat.styles.scss'

import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { db } from '../../utils/firebase/firebase';
import { useState } from 'react';

const Chat = () => {
    const { roomId } = useParams()
    const [roomDetails, setRoomDetails] = useState(null)

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId)
                .onSnapshot(snapshot => {
                    setRoomDetails(snapshot.data())
                })
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
        </div>
    )
}

export default Chat