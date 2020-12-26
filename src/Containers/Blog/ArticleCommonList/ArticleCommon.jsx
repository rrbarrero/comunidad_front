import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Avatar from '../../Common/Avatar';
import FetchUserDetail from '../../../Services/User/FetchUserDetail';


const ArticleCommon = ({ item }) => {

    const [autor, setAutor] = useState('');

    // console.log(item.fecha_creacion);
    console.log(Date.parse(item.fecha_cracion));
    
    useEffect(() => {
        if (item.autor) {
            FetchUserDetail(item.autor).then(resp => {
                setAutor(resp);
            });
        }
    },[item]);

    
    return (
        <div className="flex flex-row">
            <div className="w-3/12 p-5">
                <img className="w-52" src={item.imagen} alt="Artículo {item.id} imagen" />
            </div>
            <div className="w-7/12 p-3">
                <div className="flex flex-col">
                    <div>
                        <h3 className="text-xl font-bold pb-3">{item.titulo}</h3>
                        <p className="text-sm" dangerouslySetInnerHTML={{ __html: item.entradilla.substring(0,450) + '...' }}></p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex w-8/12"></div>
                    <div className="flex w-2/12">
                        <Avatar userId={autor.id} />
                    </div>
                    <div className="lex w-1/12 text-right italic text-sm">
                        <p>{autor.username}</p><br />
                    </div>
                </div>
                <div className="text-right italic text-sm">
                    <Link to={{ pathname: `/articulos/${item.id}` }}> Ver artículo completo </Link>
                    {/* <p>{formatDate(item.fecha_creacion)}</p> */}
                </div>
            </div>
        </div>
    );
}

export default ArticleCommon;