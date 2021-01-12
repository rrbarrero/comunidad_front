import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import FetchPostsInTopic from '../../../Services/Forum/FetchPostsInTopic';
import PostListItem from '../PostListItem/PostListItem';
import FetchTopicDetail from '../../../Services/Forum/FetchTopicDetail';
import { Link } from 'react-router-dom';
import { FaNewspaper } from 'react-icons/fa';

const PostList = () => {

    const { temaId } = useParams();
    const [isLoading, setIsLoading] = useState();
    const [posts, setPosts] = useState([]);
    const [topic, setTopic] = useState({});

    useEffect(() => {
        if (temaId) {
            setIsLoading(true);
            let isSubscribed = true;
            FetchTopicDetail(temaId).then(resp => {
                if (isSubscribed) {
                    setTopic(resp);
                }
            });
            FetchPostsInTopic(temaId).then(resp => {
                if (isSubscribed) {
                    setPosts(resp.results);
                    setIsLoading(false);
                }
            });
            return () => isSubscribed = false;
        }
    }, [temaId]);
    
    return (
        <div className="w-full overflow-hidden sm:w-3/4 bg-white">
            <div className="flex">
                <div className="bg-white w-3/4 font-Midnight text-red-congreso200 p-3">
                    <Link to={{ pathname: "/foro" }} className="text-xl">Temas</Link> / <span className="text-2xl">{topic.nombre}</span>
                </div>
                <div className="w-1/4">
                    <Link to={{ pathname: `/nuevo_hilo/${topic.id}` }}>
                        <button type="button" className="bg-blue-600 text-white p-2 mt-2 rounded  leading-none flex items-center">
                            Nuevo Hilo <span className="bg-white p-1 rounded text-blue-600 text-xs ml-2"><FaNewspaper /></span>
                        </button>
                    </Link>
                </div>
            </div>
            <ul className="divide-y divide-gray-100">
                {posts.map((item, i) => (
                    <PostListItem key={i} item={item} />
                ))}
            </ul>
        </div>
    );
}

export default PostList;