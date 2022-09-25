import { useEffect, useRef } from 'react'
import './Message.styles.scss'

const Message = ({ message, timestamp, user, userImage }) => {

    // const focusRef = useRef(null);

    // useEffect(() => {
    //     console.log('hi');
    //     focusRef.current.focus();
    // }, [])

    return (
        <div className="message">
            <img src={userImage ? userImage : `https://banner2.cleanpng.com/20180402/ojw/kisspng-united-states-avatar-organization-information-user-avatar-5ac20804a62b58.8673620215226654766806.jpg`} alt="" />
            <div className="message__info">
                <h4>
                    {user} <span className="message__timestamp">{new Date(timestamp?.toDate()).toString()}</span>
                    <p>{message}</p>
                </h4>
            </div>
        </div>
    )
}

export default Message