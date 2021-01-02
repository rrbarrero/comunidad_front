import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import FetchPostDetail from '../../../Services/Forum/FetchPostDetail';
import FetchCommentsOfPost from '../../../Services/Forum/FetchCommentsOfPost';
import CommentOfPost from '../../Blog/CommentArticle/CommentArticle';
import PutCommentOnPost from './PutCommentOnPost';

const PostDetail = ({ isAuthenticated, currentUser }) => {

    const { postId } = useParams();
    const [isLoading, setIsLoading] = useState();
    const [post, setPost] = useState({});
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        if (postId) {
            setIsLoading(true);
            let isSubscribed = true;
            FetchPostDetail(postId).then(resp => {
                if (isSubscribed) {
                    setPost(resp);
                }
            });
            FetchCommentsOfPost(postId).then(resp => {
                if (isSubscribed) {
                    setComentarios(resp.results);
                    setIsLoading(false);
                }
            });
            return () => isSubscribed = false;
        }
    }, [postId]);

    return (
       <div className="w-full overflow-hidden sm:w-3/4">
            <div className="p-8">
                <p className="text-2xl font-bold pl-4">{post.titulo}</p>
                <div className="w-full p-5">
                    <article className="">{post.cuerpo}</article>
                </div>
                <div id="article-detail-comments" className="">
                    <p className="text-xl font-bold p-3">Comentarios</p>
                    <div>
                        {comentarios.map((comment, i) => (
                            <CommentOfPost key={i} comment={comment} commentIdx={i} />
                        ))}
                    </div>
                </div>
                <PutCommentOnPost
                    currentUser={currentUser}
                    post={post}
                    isAuthenticated={isAuthenticated}
                    comentarios={comentarios}
                    setComentarios={setComentarios}
                />
            </div>
        </div>
    );
}

export default PostDetail;