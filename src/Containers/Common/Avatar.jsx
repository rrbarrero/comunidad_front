import { useEffect, useState } from "react";
import FetchAvatar from '../../Services/User/FetchAvatar';
import Spinner from '../../Assets/spinner.gif';

const Avatar = ({userId}) => {

    const [avatar, setAvatar] = useState(Spinner);

    useEffect(() => {
        if (userId) {
            FetchAvatar(userId).then(resp => {
                setAvatar(`${process.env.REACT_APP_BACKEND_STATIC_URL}${resp.avatar}`);
            });
        }
    }, [userId]);

    return (
        <a href="/" className="lg:ml-4 flex inline-flex lg:mb-0 mb-4 pointer-cursor">
            <img className="rounded-full w-8 h-8 border-2 border-transparent hover:border-indigo-400" src={avatar} alt="Current User Avatar" />
        </a>
    );
}

export default Avatar;