import { useEffect, useState } from "react";
import FetchAvatar from '../../Services/User/FetchAvatar';

const Avatar = ({userId}) => {

    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        if (userId) {
            FetchAvatar(userId).then(resp => {
                setAvatar(`${process.env.REACT_APP_BACKEND_STATIC_URL}${resp.avatar}`);
            });
        }
    }, [userId]);

    return (
        <a href="/" className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
            <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src={avatar} alt="Current User Avatar" />
        </a>
    );
}

export default Avatar;