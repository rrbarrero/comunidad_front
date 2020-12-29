import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Avatar from '../../Common/Avatar';
import FetchUserDetail from '../../../Services/User/FetchUserDetail';
import FetchCommentsOfArticle from '../../../Services/Blog/FetchCommentsOfArticle';
import { FaComments } from 'react-icons/fa';


const ArticleCommon = ({ item }) => {

    const [autor, setAutor] = useState('');
    const [comentarios, setComentarios] = useState([]);

    const dtFormated = () => {
        const date = new Date(item.fecha_creacion);
        return date.toLocaleDateString();
    }
    
    
    useEffect(() => {
        let isSubscribed = true;
        if (item.autor) {
            FetchUserDetail(item.autor).then(resp => {
                if (isSubscribed) {
                    setAutor(resp);
                }
            });
        }
        if (item.id) {
            FetchCommentsOfArticle(item.id).then(resp => {
                if (isSubscribed) {
                    setComentarios(resp.results);
                }
            });
            return () => isSubscribed = false;
        }
    },[item]);

    
    return (
        <div className="flex flex-col lg:flex-row border border-gray-100 shadow-xl mb-7 bg-white ml-1 round">
            <div className="flex w-auto text-2xl inline-block font-bold pb-2 pt-7 lg:hidden">{item.titulo}</div>
            <div className="w-full lg:w-3/12 p-5 ">
                <img className="lg:w-52 mx-auto rounded" src={item.imagen} alt="Artículo {item.id} imagen" />
            </div>
            <div className="flex w-full lg:w-9/12 p-3 flex-col">
                <Link to={{ pathname: `/articulos/${item.id}` }} className="text-red-congreso200 hover:text-red-congreso300 text-lg">
                    <p className="hidden lg:flex lg:items-center lg:w-auto text-xl inline-block font-bold pb-2">{item.titulo}</p>
                </Link>
                <p className="text-sm inline-block text-blue-congreso200">{item.entradilla.substring(0, 450)}...</p>
                <Link to={{ pathname: `/articulos/${item.id}` }} className="text-red-congreso100 hover:text-red-congreso200 text-right text-lg">continuar leyendo </Link>

                <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100">
                    <div className="flex items-center">
                        <Avatar userId={autor.id} /><br />
                        <div className="ml-8">
                            <div className="text-sm text-gray-400">Por <span className="text-sm font-semibold text-gray-500">{autor.username}</span> el <span className="text-sm font-semibold text-gray-400">{dtFormated()}</span></div>
                            <div className="hidden lg:flex lg:items-center lg:w-auto text-sm font-light italic text-gray-congreso100">Frase inspiracional delasdfasfasffsafasdfsfsfasfjhgkjhgkjhgkjhgkjh jhgkjhgkjhg kjhgkjhgkjhg autor (pendiente)</div>
                        </div>
                        <div>
                            <a href={`/articulos/${item.id}#article-detail-comments`} className="text-red-congreso100 hover:text-red-congreso200 text-lg">
                                <button className="hover:bg-blue-congreso p-2 rounded-full shadow-md flex justify-center items-center ml-2">
                                    {comentarios.length} <FaComments className="ml-1 border-transparent"/>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleCommon;