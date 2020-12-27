import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Avatar from '../../Common/Avatar';
import FetchUserDetail from '../../../Services/User/FetchUserDetail';
import FetchCommentsOfArticle from '../../../Services/Blog/FetchCommentsOfArticle';


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
        <div className="flex flex-col lg:flex-row">
            <div className="flex w-auto text-2xl inline-block font-bold pb-2 pt-7 lg:hidden">{item.titulo}</div>
            <div className="w-full lg:w-3/12 p-5 ">
                <img className="lg:w-52 mx-auto rounded" src={item.imagen} alt="Artículo {item.id} imagen" />
            </div>
            <div className="flex w-full lg:w-9/12 p-3 flex-col">
                <p className="hidden lg:flex lg:items-center lg:w-auto text-xl inline-block font-bold pb-2">{item.titulo}</p>
                <p className="text-sm inline-block" dangerouslySetInnerHTML={{ __html: item.entradilla.substring(0, 450) + '...' }}></p>
                <div className="flex flex-row">
                    <div className="flex lg:w-8/12">
                        <p className="text-sm italic"><Avatar userId={autor.id} /><br /> <span className="text-purple-400">{autor.username} </span><br />{dtFormated()}<br />comentarios: {comentarios.length} </p>
                    </div>
                    <div className="flex lg:w-4/12">
                        <Link to={{ pathname: `/articulos/${item.id}` }} className="text-blue-800 text-lg">continuar leyendo </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleCommon;