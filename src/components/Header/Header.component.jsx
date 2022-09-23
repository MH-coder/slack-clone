import './Header.styles.scss'

import { Avatar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext/userContext';

const Header = () => {
    const { user } = useContext(UserContext)

    return (
        <div className='header'>
            <div className="headerLeft">
                <Avatar src={`${user?.photoURL}`} className='headerAvatar' />
                <AccessTimeIcon />
            </div>
            <div className="search">
                <SearchIcon />
                <input type="text" placeholder='Search slack' />
            </div>
            <div className="headerRight">
                <HelpOutlineOutlinedIcon />
            </div>
        </div>
    )
}

export default Header