import { useContext } from 'react'
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom'
import { UserContext } from '../../App';
import ProfileOwn from './ProfileOwn';
import ProfileNotMine from './ProfileNotMine';

const Profile = () => {
    const { pathname, hash } = useLocation();
    const { userId } = useParams();
    const { isAuthenticated, currentUser } = useContext(UserContext);

    return (
        <>
            {isAuthenticated && currentUser.userId === parseInt(userId) ? <ProfileOwn /> : <ProfileNotMine userId={userId} />}
        </>
    );
}

export default Profile;