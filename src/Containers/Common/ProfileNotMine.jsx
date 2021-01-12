import { useState } from 'react'
import FetchUserDetail from '../../Services/User/FetchUserDetail';
import FetchAvatar from '../../Services/User/FetchAvatar';
import DefaultAvatar from '../../Assets/logo_header.jpeg';
import './ProfileOwn.css';


const ProfileOwn = ({userId}) => {

    const BACK_URL = process.env.REACT_APP_BACKEND_STATIC_URL;

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [frase, setFrase] = useState('');
    const [currentAvatar, setCurrentAvatar] = useState(DefaultAvatar);

    useState(() => {
        let isSubscribed = true;   
        FetchUserDetail(userId).then(resp => {
            if (isSubscribed) {
                setNombre(resp.first_name);
                setApellidos(resp.last_name);
                setFrase(resp.perfil.frase_inspiradora);
            }
        });
        FetchAvatar(userId).then(resp => {
            if (isSubscribed) {
                setCurrentAvatar(`${BACK_URL}${resp.avatar}`);
            }
        });
        return () => isSubscribed = false;
    }, [currentAvatar])
    
    return (
        <div className="flex w-full overflow-hidden sm:w-3/4 bg-white justify-center">
                <div className="bg-white rounded-lg py-3 mt-10">
                    <div className="photo-wrapper p-2">
                        <img className="w-32 h-32 rounded-full mx-auto" src={currentAvatar} alt="User Avatar" />
                    </div>
                    <div className="p-2">
                        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{nombre} {apellidos}</h3>
                        <div className="text-center text-gray-400 text-xs font-semibold">
                            <p>{frase}</p>
                        </div>
                        <table className="text-xs my-3">
                            <tbody>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Participando desde</td>
                                    <td className="px-2 py-2">Pendiente</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Nº comentarios</td>
                                    <td className="px-2 py-2">Pendiente</td>
                                </tr>
                                <tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Nº hilos abiertos</td>
                                    <td className="px-2 py-2">Pendiente</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <div className="text-center my-3">
                            <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                        </div> */}
                    </div>
                </div>
        </div>
    );
}

export default ProfileOwn;