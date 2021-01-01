import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import FetchPostsInTopic from '../../../Services/Forum/FetchPostsInTopic';
import PostListItem from '../PostListItem/PostListItem';
import FetchTopicDetail from '../../../Services/Forum/FetchTopicDetail';

const PostList = () => {

    const { temaId } = useParams();
    const [isLoading, setIsLoading] = useState();
    const [posts, setPosts] = useState([]);
    const [topic, setTopic] = useState([]);

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
            <div className="bg-white text-center font-Midnight text-3xl text-red-congreso200 p-3">{topic.nombre} Hilos</div>
            <ul className="divide-y divide-gray-100">
                {posts.map((item, i) => (
                    <PostListItem key={i} item={item} />
                ))}
            </ul>
        </div>
    );
}

export default PostList;