import { useEffect, useState, useContext } from "react";
import CommentArticle from '../CommentArticle/CommentArticle';
import FetchNewDetail from '../../../Services/Blog/FetchNewDetail';
import FetchCommentsOfNew from '../../../Services/Blog/FetchCommentsOfNew';
import Spinner from '../../../Assets/rings.svg';
import PostComment from '../ArticleDetail/PostComment';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom'
import '../ArticleDetail/ArticleDetail.css';
import UpdateComment from "../CommentArticle/UpdateComment";
import UpdateCommentNews from "../../../Services/Blog/UpdateCommentNews";
import PostCommentNews from "../../../Services/Blog/PostCommentNews";


const NewDetail = () => {
    
    const { pathname, hash } = useLocation()
    const { articuloId } = useParams();

    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState();
    const [comentarios, setComentarios] = useState([]);
    const [updatingComment, setUpdatingComment] = useState(false);
    const [commentToUpdate, setCommentToUpdate] = useState({});

    useEffect(() => {
        if (articuloId) {
            setIsLoading(true);
            let isSubscribed = true;
            FetchNewDetail(articuloId).then(resp => {
                if (isSubscribed) {
                    setArticle(resp);
                }
            });
            FetchCommentsOfNew(articuloId).then(resp => {
                if (isSubscribed) {
                    setComentarios(resp.results);
                    setIsLoading(false);
                }
            });
            return () => isSubscribed = false;
        }
    }, [articuloId]);

    useEffect(() => {
      // if not a hash link scroll to top
      if(hash===''){
          window.scrollTo(0, 0)
      }
      // else scroll to id
      else{
          setTimeout(
              () => {
                  const id = hash.replace('#', '');
                  const element = document.getElementById(id);
                  if (element) {
                      element.scrollIntoView();
                  }
              },
              2000
          );
      }
    }, [hash, pathname])


    return (
        <div className="w-full overflow-hidden sm:w-3/4">
            <div className="p-8">
                <p className="text-2xl font-bold pl-4">{article.titulo}</p>
                <div className="w-full p-5">
                        {!isLoading && <img className="w-52 lg:w-52 float-left m-1 rounded" src={article.imagen} alt="Artículo imagen" />}
                        {isLoading && <img className="float-left m-5 rounded" src={Spinner} alt="Artículo imagen" />}
                        <article id="article-detail" dangerouslySetInnerHTML={{ __html: article.cuerpo }}></article>
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
                                    updateFunction={UpdateCommentNews}
                                />
                            } else {
                                return <CommentArticle key={i}
                                    comment={comment}
                                    commentIdx={i}
                                    setUpdatingComment={setUpdatingComment}
                                    setCommentToUpdate={setCommentToUpdate}
                                />
                            }
                        })}
                    </div>
                </div>
                {updatingComment===false && <PostComment
                    article={article}
                    comentarios={comentarios}
                    setComentarios={setComentarios}
                    postCommentFunction={PostCommentNews}
                />}
            </div>
        </div>
    );
}

export default NewDetail;