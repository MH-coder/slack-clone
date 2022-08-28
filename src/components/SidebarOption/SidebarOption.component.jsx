import './SidebarOption.styles.scss'

import { useNavigate } from 'react-router-dom'
import { db } from '../../utils/firebase/firebase'

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {

    const navigate = useNavigate()

    const addChannel = () => {
        const channelName = prompt("Please enter the channel name")

        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }

    const selectChannel = () => {
        if (id) {
            navigate(`/room/${id}`)
        } else {
            navigate(title)
        }
    }

    return (
        <div className='sidebarOption' onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className='sidebarOptionIcon' />}
            {Icon ? (<h3>{title}</h3>)
                : (<h3 className='sidebarOptionChannel'>
                    <span className='sidebarOptionHash'>#</span>{title}
                </h3>)}
        </div>
    )
}

export default SidebarOption