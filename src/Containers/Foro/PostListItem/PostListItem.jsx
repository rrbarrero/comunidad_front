import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import FetchUserDetail from '../../../Services/User/FetchUserDetail';
import Avatar from '../../Common/Avatar';

const PostListItem = ({ item }) => {

    const [autor, setAutor] = useState('');

    useEffect(() => {
        let isSubscribed = true;
        if (item.autor) {
            FetchUserDetail(item.autor).then(resp => {
                if (isSubscribed) {
                    setAutor(resp);
                }
            });
        }
    }, [item]);


    return (
       <Link to={{ pathname: `/hilos/${item.id}` }}>
            <article className="p-4 flex space-x-4">
                {/* <img src={item.imagen} alt="" className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100" width="144" height="144" /> */}
                <Avatar userId={autor.id} />
                <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                    <h2 className="text-lg font-semibold text-red-congreso200 text-black mb-0.5">
                    {item.titulo}
                    </h2>
                    <dl className="flex flex-wrap text-sm font-medium">
                        <div className="flex-none w-full mt-0.5 font-normal italic">
                            <dt className="sr-only">Lecturas</dt>
                            <dd>Lecturas: {item.lecturas}</dd>
                        </div>
                        {/* <div>
                            <dt className="sr-only">Servings</dt>
                            <dd>Hilos</dd>
                        </div> */}
                    </dl>
                </div>
            </article>
        </Link>
    );
}

export default PostListItem;