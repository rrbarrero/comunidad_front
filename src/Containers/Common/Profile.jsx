import { useContext, useState } from 'react'
import { UserContext } from '../../App';
import FetchUserDetail from '../../Services/User/FetchUserDetail';
import FetchAvatar from '../../Services/User/FetchAvatar';
import UpdateUserDetail from '../../Services/User/UpdateUserDetail';
import './Profile.css';


const Profile = () => {

    const { isAuthenticated, currentUser } = useContext(UserContext);

    const [error, setError] = useState([]);
    const [username, setUsername] = useState('')
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    // const [password, setPassword] = useState('');
    // const [password2, setPassword2] = useState('');
    const [frase, setFrase] = useState('');
    // const [ocupacion, setOcupacion] = useState('');
    const [currentAvatar, setCurrentAvatar] = useState('');
    const [newAvatar, setNewAvatar] = useState('');

    //console.log("Profile.jsx", error);

    const handleSubmit = () => {
        const profile = {
            id: currentUser.userId,
            username,
            first_name: nombre,
            last_name: apellidos,
            perfil: {
                frase_inspiradora: frase,
            }
        }
        UpdateUserDetail(currentUser, profile).then(resp => {
            if (resp.status !== 200) {
                let errors = [];
                for (var [_v, value] of Object.entries(resp.data)) {
                    errors.push(value);
                };
                setError(errors);
            } else {
                console.log("ok");
            }
        });
    }

    useState(() => {
        let isSubscribed = true;
        if (currentUser && currentUser.userId) {
            FetchUserDetail(currentUser.userId).then(resp => {
                if (isSubscribed) {
                    setUsername(resp.username);
                    setNombre(resp.first_name);
                    setApellidos(resp.last_name);
                    setFrase(resp.perfil.frase_inspiradora);
                    //setOcupacion(resp.ocupacion);
                    setCurrentAvatar(`${process.env.REACT_APP_BACKEND_STATIC_URL}${resp.avatar}`);
                }
            });
            FetchAvatar(currentUser.userId).then(resp => {
                if (isSubscribed) {
                    setCurrentAvatar(`${process.env.REACT_APP_BACKEND_STATIC_URL}${resp.avatar}`);
                }
            });
            return () => isSubscribed = false;
        }
    }, [currentUser])
    
    return (
        <div className="w-full overflow-hidden sm:w-3/4 bg-white">
            <div className="w-full md:hidden"><img className="m-4" id="profile-currentAvatarImg" src={currentAvatar} alt="Current User Avatar" /></div>
            <div className="w-full flex flex-row-reverse p-5">
                <div className="hidden md:block md:flex-grow-0 m-3">
                    <img className="" id="profile-currentAvatarImg" src={currentAvatar} alt="Current User Avatar" />
                </div>
                <div className="flex-grow">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="nombre" className="text-sm font-semibold text-gray-500">Nombre</label>
                            <input
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            autoFocus
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="apellidos" className="text-sm font-semibold text-gray-500">Apellidos</label>
                            <input
                            type="text"
                            id="apellidos"
                            value={apellidos}
                            onChange={(e) => setApellidos(e.target.value)}
                            autoFocus
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="frase" className="text-sm font-semibold text-gray-500">Frase inspiradora</label>
                            <input
                            type="text"
                            id="frase"
                            value={frase}
                            onChange={(e) => setFrase(e.target.value)}
                            autoFocus
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="newAvatar" className="text-sm font-semibold text-gray-500">Actualizar avatar</label>
                            <input
                            type="file"
                            id="newAvatar"
                            value={newAvatar}
                            onChange={(e) => setNewAvatar(e.target.value)}
                            autoFocus
                            className="px-4 py-2 transition duration-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                    
                        <div>
                            <button
                                id="button-register"
                                type="submit"
                                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-congreso200 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                                Actualizar mi perfil
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Profile;