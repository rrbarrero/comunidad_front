import { useEffect, useState } from "react";
import CommentArticle from '../CommentArticle/CommentArticle';
import FetchArticleDetail from '../../../Services/Blog/FetchArticleDetail';
import FetchCommentsOfArticle from '../../../Services/Blog/FetchCommentsOfArticle';
import Spinner from '../../../Assets/rings.svg';
import PostComment from './PostComment';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom'
import './ArticleDetail.css';
import UpdateComment from "../CommentArticle/UpdateComment";
import UpdateCommentArticle from '.././../../Services/Blog/UpdateCommentArticle';
import PostCommentArticle from '../../../Services/Blog/PostCommentArticle';
import Avatar from '../../Common/Avatar';
import FetchUserDetail from '../../../Services/User/FetchUserDetail';
import { getDateFormated, getSignature } from '../../../Services/Common/Misc';
import { FaComments } from 'react-icons/fa';


const ArticleDetail = () => {
    
    const { pathname, hash } = useLocation();
    const { articuloId } = useParams();

    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState();
    const [comentarios, setComentarios] = useState([]);
    const [updatingComment, setUpdatingComment] = useState(false);
    const [commentToUpdate, setCommentToUpdate] = useState({});
    const [autor, setAutor] = useState('');
    const [signature, setSignature] = useState('');


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
        if (article && article.autor) {
            let isSubscribed = true;
            FetchUserDetail(article.autor).then(resp => {
                if (isSubscribed) {
                    setAutor(resp);
                }
            });
            return () => isSubscribed = false;
        }
    },[article]);

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

                <div className="flex justify-between lg:w-2/3 items-center h-16 p-2 mt-2 mb-14 border-2 bg-white border-blue-congreso100 shadow-xl rounded-lg">
                    <div className="flex w-full items-center">
                        <div className="flex w-10/12">
                            <Avatar userId={article.autor}/><br />
                            <div className="pl-1 pt-3">
                                <div className="text-sm text-red-congreso200 mt-3">Por <span className="text-sm font-semibold">{autor && getSignature(autor)}</span> <span className="text-sm text-red-congreso100">{getDateFormated(article.fecha_creacion)}</span></div>
                                <div className="hidden lg:flex lg:items-center lg:w-auto text-sm font-light italic text-gray-congreso100">{autor.perfil && autor.perfil.frase_inspiradora}</div>
                            </div>
                        </div>
                        <div className="flex w-2/12">
                            <div className="text-red-congreso100 text-lg">
                                {comentarios.length} <FaComments className="ml-1 border-transparent"/>
                            </div>
                        </div>
                    </div>
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
                                    updateFunction={UpdateCommentArticle}
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
                    postCommentFunction={PostCommentArticle}
                />}
            </div>
        </div>
    );
}

export default ArticleDetail;