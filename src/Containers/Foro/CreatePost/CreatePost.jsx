import { useParams } from 'react-router';
import { useState, useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';
import FetchTopicDetail from '../../../Services/Forum/FetchTopicDetail';
import CreatePostOnTopic from '../../../Services/Forum/CreatePostOnTopic';
import { ToastContainer, toast } from 'react-toastify';

const CreatePost = () => {

    const { topicId } = useParams();
    let history = useHistory();
    const { isAuthenticated, currentUser } = useContext(UserContext);
    
    const [error, setError] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [cuerpo, setCuerpo] = useState('');
    const [topic, setTopic] = useState({});


    if (!isAuthenticated) {
        history.push('/registro')
    }

    const validateForm = () => {
        let errors = [];
        if (20 > titulo.length) {
            errors.push("Título demasiado corto. Anima esa creatividad :)")
        }
        if (100 < titulo.length) {
            errors.push("Título demasiado largo. Estás escribiendo un libro aquí?")
        }
        if (70 > cuerpo.length) {
            errors.push("Texto demasiado corto. Anima esa creatividad :)")
        }
        return errors;
    }

    useEffect(() => {
        let isSubscribed = true;
        FetchTopicDetail(topicId).then(resp => {
            if (isSubscribed) {
                setTopic(resp);
            }
        });
        return () => isSubscribed = false;
    }, [topicId]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setError(validateForm())
        if (error.length === 0) {
            const post = {
                titulo,
                cuerpo,
            }
            CreatePostOnTopic(currentUser, topicId, post).then(resp => {
                if (resp.status !== 201) {
                    let errors = [];
                    for (var [_v, value] of Object.entries(resp.data)) {
                        errors.push(value);
                    };
                    setError(errors);
                } else {
                    const newPost = resp.data;
                    toast.success(`Tu hilo se creo satisfactoriamente.`);
                    setTimeout(function () {
                        history.push(`/hilos/${newPost.id}`)
                    }, 2000);
                }
            });
        } else {
            error.forEach(x => toast.info(x));
        }
    }
    
    return (
        <div className="w-full overflow-hidden sm:w-3/4 bg-white p-10">
            <div className="bg-white w-3/4 font-Midnight text-red-congreso200 p-3 mb-5">
                <Link to={{ pathname: "/foro" }} className="text-md">Temas</Link> /  <Link to={{ pathname: `/temas/${topicId}` }} className="text-md">{topic.nombre}</Link>
            </div>
            <ToastContainer />
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Título
                        </label>
                        <input value={titulo} onChange={(e) => setTitulo(e.target.value)} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Texto
                        </label>
                        <textarea value={cuerpo} onChange={(e) => setCuerpo(e.target.value)} className="no-resize appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                        <p className="text-gray-600 text-md italic">Recuerda que el mensaje debe estar relacionado con el tema de hilo.</p>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                    <button className="shadow bg-gray-100 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-red-congreso200 font-bold py-2 px-4 rounded" type="submit">
                        Enviar
                    </button>
                    </div>
                    <div className="md:w-2/3"></div>
                </div>
            </form>
        </div>
    );
}

export default CreatePost;