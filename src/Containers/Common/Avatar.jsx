import { useEffect, useState } from "react";
import FetchAvatar from '../../Services/User/FetchAvatar';
import Spinner from '../../Assets/spinner.gif';

const Avatar = ({ userId }) => {

    const [avatar, setAvatar] = useState(Spinner);

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
        <a href="/" className="lg:ml-4 flex inline-flex lg:mb-0 mb-4 pointer-cursor">
            <img className="rounded-full w-11 h-10 border-2 border-transparent hover:border-indigo-400" src={avatar} alt="Current User Avatar" />
        </a>
    );
}

export default Avatar;