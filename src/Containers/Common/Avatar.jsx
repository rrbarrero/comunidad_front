import { useEffect, useState } from "react";
import FetchAvatar from '../../Services/User/FetchAvatar';
import DefaultAvatar from '../../Assets/logo_header.jpeg';
import { Link } from 'react-router-dom';
// import Spinner from '../../Assets/spinner.gif';

const Avatar = ({ userId, children }) => {

    const [avatar, setAvatar] = useState(DefaultAvatar);

    useEffect(() => {
        if (userId) {
            let isSubscribed = true;
            FetchAvatar(userId).then(resp => {
                if (isSubscribed) {
                    setAvatar(`${process.env.REACT_APP_BACKEND_STATIC_URL}${resp.avatar}`);
                }
            });
            return () => isSubscribed = false;
        }
    }, [userId]);

    return (
        <Link to={{ pathname: `/perfil/${userId}` }} className="lg:ml-1 flex inline-flex lg:mb-0 mb-4 pointer-cursor">
            <img className="rounded-full w-14 h-13 border-2 mt-2 border-transparent hover:border-indigo-400" src={avatar} alt="Current User Avatar" />{children}
        </Link>
    );
}

export default Avatar;