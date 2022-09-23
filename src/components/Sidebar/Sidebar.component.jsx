import { useState, useEffect, useContext } from 'react'
import './Sidebar.styles.scss'

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import CommentIcon from '@mui/icons-material/Comment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

import SidebarOption from '../SidebarOption/SidebarOption.component';

import { db } from '../../utils/firebase/firebase';
import { UserContext } from '../../context/UserContext/userContext';

const Sidebar = () => {
    const { user } = useContext(UserContext)

    const [channels, setChannels] = useState([])

    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot) => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name
            })))
        ))
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebarHeader">
                <div className="sidebarInfo">
                    <h2>Coder</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>

            <SidebarOption Icon={CommentIcon} title='Threads' />
            <SidebarOption Icon={InboxIcon} title='Mentions & reactions' />
            <SidebarOption Icon={DraftsIcon} title='Saved items' />
            <SidebarOption Icon={BookmarkBorderIcon} title='Channel browser' />
            <SidebarOption Icon={PeopleAltIcon} title='People & user groups' />
            <SidebarOption Icon={AppsIcon} title='Apps' />
            <SidebarOption Icon={FileCopyIcon} title='File browser' />
            <SidebarOption Icon={ExpandLessIcon} title='Show less' />

            <hr />

            <SidebarOption Icon={ExpandMoreIcon} title='Channels' />

            <hr />

            <SidebarOption Icon={AddIcon} addChannelOption title='Add Channel' />
            {
                channels?.map(({ id, name }) => (
                    <SidebarOption key={id} id={id} title={name} />
                ))
            }
        </div>
    )
}

export default Sidebar