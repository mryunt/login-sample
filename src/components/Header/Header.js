import React from 'react'
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap'
import { logout } from '../../redux/Auth/action';

const Header = ({ content }) => {
    const dispatch = useDispatch();

    const logoutFunc = () => {
        dispatch(logout())
    }

    return (
        <div>
            <Button
                onClick={() => logoutFunc()}
                hidden={!content}
                outline>
                {content ? "LOG OUT" : false}
            </Button>
        </div>
    )
}

export default Header
