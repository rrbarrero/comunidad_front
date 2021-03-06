import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Avatar from '../../Common/Avatar';
import FetchUserDetail from '../../../Services/User/FetchUserDetail';
import FetchCommentsOfArticle from '../../../Services/Blog/FetchCommentsOfArticle';
import { FaComments } from 'react-icons/fa';
import { getDateFormated, getSignature } from '../../../Services/Common/Misc';


const ArticleListItem = ({ item }) => {

    const [autor, setAutor] = useState('');
    const [comentarios, setComentarios] = useState([]);
    
    
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
    }, [item]);
    
    
    return (
        <div className="flex flex-col lg:flex-row border border-gray-100 shadow-xl mb-7 bg-white ml-1 mr-1 round">
            <Link to={{ pathname: `/articulos/${item.id}` }} className="text-red-congreso200">
                <div className="flex w-auto text-xl inline-block font-bold pl-5 pr-5 pb-2 pt-7 lg:hidden">{item.titulo}</div>
            </Link>
            <div className="w-full lg:w-3/12 p-5 ">
                <img className="lg:w-52 mx-auto rounded" src={item.imagen} alt="Artículo id imagen" />
            </div>
            <div className="flex w-full lg:w-9/12 p-3 flex-col">
                <Link to={{ pathname: `/articulos/${item.id}` }} className="text-red-congreso200 hover:text-red-congreso300 text-lg">
                    <p className="hidden lg:flex lg:items-center lg:w-auto text-xl inline-block font-bold pb-2">{item.titulo}</p>
                </Link>
                <p className="text-sm inline-block text-blue-congreso200">{item.entradilla.substring(0, 450)}...</p>
                <Link to={{ pathname: `/articulos/${item.id}` }} className="text-red-congreso100 hover:text-red-congreso200 text-right text-lg more-button">continuar leyendo </Link>

                <div className="flex justify-between items-center h-16 p-2 my-6  rounded-lg border border-gray-100">
                    <div className="flex w-full items-center">
                        <div className="flex w-10/12">
                            <Avatar userId={autor?.id} /><br />
                            <div className="pl-1 pt-3">
                                <div className="text-sm text-gray-400">Por 
                                    <Link
                                        to={{ pathname: `/perfil/${autor?.id}` }}
                                        className="lg:ml-1 flex inline-flex flex-shrink-0 lg:mb-0 mb-4 pointer-cursor"
                                    >
                                        <span className="text-sm font-semibold text-red-congreso100">{getSignature(autor)}</span> 
                                    </Link>
                                    <span className="text-sm font-semibold text-gray-400">{" "}{getDateFormated(item?.fecha_creacion)}</span>
                                </div>
                                <div className="hidden lg:flex lg:items-center lg:w-auto text-sm font-light italic text-gray-congreso200">{autor?.perfil && autor?.perfil?.frase_inspiradora}</div>
                            </div>
                        </div>
                        <div className="flex w-2/12">
                            <Link to={`/articulos/${item?.id}#article-detail-comments`} className="text-red-congreso100 hover:text-red-congreso200 text-lg">
                                <button className="hover:bg-blue-congreso p-2 rounded-full shadow-md flex justify-center items-center ml-2">
                                    {comentarios.length} <FaComments className="ml-1 border-transparent"/>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleListItem;