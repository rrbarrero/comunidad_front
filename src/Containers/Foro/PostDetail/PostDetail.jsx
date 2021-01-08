import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import FetchPostDetail from '../../../Services/Forum/FetchPostDetail';
import FetchTopicDetail from '../../../Services/Forum/FetchTopicDetail';
import FetchCommentsOfPost from '../../../Services/Forum/FetchCommentsOfPost';
import CommentOfPost from '../../Blog/CommentArticle/CommentArticle';
import UpdateComment from '../CommentOfPost/UpdateComment';
import PutCommentOnPost from './PutCommentOnPost';
import { Link } from 'react-router-dom';

const PostDetail = () => {

    const { postId } = useParams();
    const [isLoading, setIsLoading] = useState();
    const [post, setPost] = useState({});
    const [topic, setTopic] = useState({});
    const [comentarios, setComentarios] = useState([]);
    const [updatingComment, setUpdatingComment] = useState(false);
    const [commentToUpdate, setCommentToUpdate] = useState({});

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

    useEffect(() => {
        if (post && post.tema) {
            let isSubscribed = true;
            FetchTopicDetail(post.tema).then(resp => {
                if (isSubscribed) {
                    setTopic(resp);
                }
            });
            return () => isSubscribed = false;
        }
    }, [post]);

    const BreadCrumb = () => {
        if (topic && topic.nombre) {
            return (
                <>
                    <Link to={{ pathname: "/foro" }} className="text-xl border-b-2 border-transparent hover:border-blue-congreso200">Temas</Link>
                    <span> / </span>
                    <Link to={{ pathname: `/temas/${topic.id}/publicaciones` }} className="text-2xl border-b-2 border-transparent hover:border-blue-congreso200">{topic.nombre}</Link>
                </>
            );
        } else {
            return (
                <>
                    <Link to={{ pathname: "/foro" }} className="text-xl border-b-2 border-transparent hover:border-blue-congreso200">Temas</Link>
                    <span> / </span>
                </>
            );
        }

    }

    return (
        <div className="w-full overflow-hidden sm:w-3/4">
            <div className="bg-yellow-congreso98 font-Midnight text-red-congreso200 pt-3 pb-3 pl-5">
                <BreadCrumb />
            </div>
            <div className="p-8">
                <p className="text-2xl font-bold pl-4">{post.titulo}</p>
                <div className="w-full p-5">
                    <article className="">{post.cuerpo}</article>
                </div>
                <div id="article-detail-comments" className="">
                    <p className="text-xl font-bold p-3">Comentarios</p>
                    <div>
                        {comentarios.map((comment, i) => {
                            if (updatingComment && commentToUpdate && commentToUpdate.id === comment.id) {
                                return <UpdateComment key={i}
                                    comment={comment}
                                    comentarios={comentarios}
                                    setComentarios={setComentarios}
                                    setUpdatingComment={setUpdatingComment}
                                />
                            } else {
                                return <CommentOfPost key={i}
                                    comment={comment}
                                    commentIdx={i}
                                    setUpdatingComment={setUpdatingComment}
                                    setCommentToUpdate={setCommentToUpdate}
                                />
                            }
                        })}
                    </div>
                </div>
                {updatingComment === false && <PutCommentOnPost
                    post={post}
                    comentarios={comentarios}
                    setComentarios={setComentarios}
                />}
            </div>
        </div>
    );
}

export default PostDetail;