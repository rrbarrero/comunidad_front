import { useEffect, useState, useContext } from "react";
import CommentArticle from '../CommentArticle/CommentArticle';
import FetchArticleDetail from '../../../Services/Blog/FetchArticleDetail';
import FetchCommentsOfArticle from '../../../Services/Blog/FetchCommentsOfArticle';
import Spinner from '../../../Assets/rings.svg';
import PostComment from './PostComment';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom'
import { UserContext } from '../../../App';
import './ArticleDetail.css';
import UpdateComment from "../CommentArticle/UpdateComment";


const ArticleDetail = () => {
    
    const { pathname, hash } = useLocation()
    const { articuloId } = useParams();

    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState();
    const [comentarios, setComentarios] = useState([]);
    const [updatingComment, setUpdatingComment] = useState(false);
    const [commentToUpdate, setCommentToUpdate] = useState({});

    const {isAuthenticated, currentUser} = useContext(UserContext);

    useEffect(() => {
        if (articuloId) {
            setIsLoading(true);
            let isSubscribed = true;
            FetchArticleDetail(articuloId).then(resp => {
                if (isSubscribed) {
                    setArticle(resp);
                }
            });
            FetchCommentsOfArticle(articuloId).then(resp => {
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
                        <article className="" dangerouslySetInnerHTML={{ __html: article.cuerpo }}></article>
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
                />}
            </div>
        </div>
    );
}

export default ArticleDetail;