import { useEffect, useState } from "react";
import CommentArticle from '../CommentArticle/CommentArticle';
import FetchNewDetail from '../../../Services/Blog/FetchNewDetail';
import FetchCommentsOfNew from '../../../Services/Blog/FetchCommentsOfNew';
import Spinner from '../../../Assets/rings.svg';
import PostComment from '../ArticleDetail/PostComment';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom'
import '../ArticleDetail/ArticleDetail.css';
import Avatar from '../../Common/Avatar';
import UpdateComment from "../CommentArticle/UpdateComment";
import UpdateCommentNews from "../../../Services/Blog/UpdateCommentNews";
import PostCommentNews from "../../../Services/Blog/PostCommentNews";
import FetchUserDetail from '../../../Services/User/FetchUserDetail';
import { getDateFormated, getSignature } from '../../../Services/Common/Misc';
import { FaComments } from 'react-icons/fa';
import Pagination from '../../Common/Pagination';

const NewDetail = () => {
    
    const { pathname, hash } = useLocation()
    const { articuloId } = useParams();

    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState();
    const [comentarios, setComentarios] = useState([]);
    const [updatingComment, setUpdatingComment] = useState(false);
    const [commentToUpdate, setCommentToUpdate] = useState({});
    const [autor, setAutor] = useState('');
    const [url, setUrl] = useState("");
    const [nextUrl, setNextUrl] = useState(url);
    const [prevUrl, setPrevUrl] = useState(url);
    const [commentsCount, setCommentsCount] = useState(0);
    const [page, setPage] = useState(0);

    const handleNext = () => {
      if (nextUrl) {
        setUrl(nextUrl);
        document.getElementById("article-detail-comments").scrollIntoView({behavior: "smooth"});
        setPage(page+1);
      } else {
        return () => {};
      }
    };

    const handlePrev = () => {
      if (prevUrl) {
        setUrl(prevUrl);
        document.getElementById("article-detail-comments").scrollIntoView({behavior: "smooth"});
        if(page>0){
          setPage(page-1);
        }
      } else {
        return () => {};
      }
    };

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
                    setNextUrl(resp.next);
                    setPrevUrl(resp.previous);
                    setCommentsCount(resp.count);
                    setIsLoading(false);
                }
            });
            return () => isSubscribed = false;
        }
    }, [articuloId]);

    useEffect(() => {
        if(url){
          let isSubscribed = true;
          FetchCommentsOfNew(0, url).then((resp) => {
              if (isSubscribed) {
                  setComentarios(resp.results);
                  setNextUrl(resp.next);
                  setPrevUrl(resp.previous);
                  setCommentsCount(resp.count);
                  setIsLoading(false);
              }
          });
          return () => (isSubscribed = false);
        }
    }, [url]);

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
            {!isLoading && (
              <img
                className="w-52 lg:w-52 float-left m-1 rounded"
                src={article.imagen}
                alt="Artículo imagen"
              />
            )}
            {isLoading && (
              <img
                className="float-left m-5 rounded"
                src={Spinner}
                alt="Artículo imagen"
              />
            )}
            <article
              id="article-detail"
              dangerouslySetInnerHTML={{ __html: article.cuerpo }}
            ></article>
          </div>

          <div className="flex justify-between lg:w-2/3 items-center h-16 p-2 mt-2 mb-14 border-2 bg-white border-blue-congreso100 shadow-xl rounded-lg">
            <div className="flex w-full items-center">
              <div className="flex w-10/12">
                <Avatar userId={article.autor} />
                <br />
                <div className="pl-1">
                  <div className="text-sm text-red-congreso200 mt-3">
                    Por{" "}
                    <span className="text-sm font-semibold">
                      {autor && getSignature(autor)}
                    </span>{" "}
                    <span className="text-sm text-red-congreso100">
                      {getDateFormated(article.fecha_creacion)}
                    </span>
                  </div>
                  <div className="hidden lg:flex lg:items-center lg:w-auto text-sm font-light italic text-gray-congreso100">
                    {autor.perfil && autor.perfil.frase_inspiradora}
                  </div>
                </div>
              </div>
              <div className="flex w-2/12">
                <div className="text-red-congreso100 text-lg">
                  {commentsCount}{" "}
                  <FaComments className="ml-1 border-transparent" />
                </div>
              </div>
            </div>
          </div>

          <div id="article-detail-comments" className="">
            <p className="text-xl font-bold p-3">Comentarios</p>
            <div>
              {comentarios.map((comment, i) => {
                const idx = i+page*process.env.REACT_APP_COMMENTS_PER_PAGE;
                if (
                  updatingComment &&
                  commentToUpdate &&
                  commentToUpdate.id === comment.id
                ) {
                  return (
                    <UpdateComment
                      key={idx}
                      comment={comment}
                      comentarios={comentarios}
                      setComentarios={setComentarios}
                      setUpdatingComment={setUpdatingComment}
                      updateFunction={UpdateCommentNews}
                    />
                  );
                } else {
                  return (
                    <CommentArticle
                      key={idx}
                      comment={comment}
                      commentIdx={idx}
                      setUpdatingComment={setUpdatingComment}
                      setCommentToUpdate={setCommentToUpdate}
                    />
                  );
                }
              })}
              {commentsCount > process.env.REACT_APP_COMMENTS_PER_PAGE && (
                <Pagination
                  handleNext={nextUrl ? handleNext : null}
                  handlePrev={prevUrl ? handlePrev : null}
                  nextString="COMENTARIOS ANTERIORES"
                  prevString="COMENTARIOS POSTERIORES"
                />
              )}
            </div>
          </div>
          {updatingComment === false && (
            <PostComment
              article={article}
              comentarios={comentarios}
              setComentarios={setComentarios}
              postCommentFunction={PostCommentNews}
            />
          )}
        </div>
      </div>
    );
}

export default NewDetail;