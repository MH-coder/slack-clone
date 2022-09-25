import React, { useState } from 'react'
import './ChatInput.styles.scss'
import { useContext } from 'react'

import { db } from '../../../utils/firebase/firebase'
import firebase from "firebase/compat/app";
import { UserContext } from '../../../context/UserContext/userContext'

const ChatInput = ({ channelName, channelId }) => {
    const [input, setInput] = useState('')
    const { user } = useContext(UserContext)

    const sendMessage = (e) => {
        e.preventDefault()

        if (channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL
            });
        }

        setInput('')
    }

    return (
        <div className='chatInput'>
            <form>
                <input type="text" placeholder={`Message #${channelName}`} value={input} onChange={e => setInput(e.target.value)} />
                <button type='submit' onClick={sendMessage}>send</button>
            </form>
        </div>
    )
}

export default ChatInput