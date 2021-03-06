import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import FetchUserDetail from '../../../Services/User/FetchUserDetail';
import FetchCommentsOfPost from '../../../Services/Forum/FetchCommentsOfPost';
import Avatar from '../../Common/Avatar';

const PostListItem = ({ item }) => {

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
            FetchCommentsOfPost(item.id).then(resp => {
                if (isSubscribed) {
                    setComentarios(resp.results);
                }
            });
            return () => isSubscribed = false;
        }
        return () => isSubscribed = false;
    }, [item]);


    return (
            <article className="p-4 flex space-x-4">
                {/* <img src={item.imagen} alt="" className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100" width="144" height="144" /> */}
                <Avatar userId={autor.id} />
                <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                    <Link to={{ pathname: `/hilos/${item?.id}` }}>
                        <h2 className="text-lg font-semibold text-red-congreso200 text-black mb-0.5">
                            {item?.titulo}
                        </h2>
                    </Link>
                    <dl className="flex flex-wrap text-sm font-medium">
                        <div className="flex-none w-full mt-0.5 font-normal italic">
                            <dt className="sr-only">Lecturas</dt>
                            <dd>Lecturas: {item?.lecturas} · Comentarios: {comentarios?.length}</dd>
                        </div>
                        <div className="font-normal italic">
                            <dt className="sr-only">Autor</dt>
                            <dd>por {autor?.username} el {dtFormated()}</dd>
                        </div>
                    </dl>
                </div>
            </article>
        
    );
}

export default PostListItem;