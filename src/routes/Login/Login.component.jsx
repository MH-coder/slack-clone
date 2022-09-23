import React from 'react'
import './Login.styles.scss'
import { Button } from '@material-ui/core'
import { auth, provider } from '../../utils/firebase/firebase'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext/userContext'

const Login = () => {

    const { setUser } = useContext(UserContext)

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result);
                setUser(result.user._delegate)
            })
            .catch(error => { alert(error.message) })
    }

    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2019-01_BrandRefresh_Old-to-New-Final.gif" alt="" />
                <h2>Sign In To Hassan's HQ</h2>
                <p>mh.slack.com</p>
                <Button onClick={signIn}>Sign In</Button>
            </div>
        </div>
    )
}

export default Login