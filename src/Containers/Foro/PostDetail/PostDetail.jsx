import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import FetchPostDetail from '../../../Services/Forum/FetchPostDetail';
import FetchTopicDetail from '../../../Services/Forum/FetchTopicDetail';
import FetchCommentsOfPost from '../../../Services/Forum/FetchCommentsOfPost';
import CommentOfPost from '../../Blog/CommentArticle/CommentArticle';
import UpdateComment from '../CommentOfPost/UpdateComment';
import PutCommentOnPost from './PutCommentOnPost';
import { Link, useLocation } from 'react-router-dom';
import Avatar from "../../Common/Avatar";
import FetchUserDetail from "../../../Services/User/FetchUserDetail";
import { getDateFormated, getSignature } from "../../../Services/Common/Misc";
import { TwitterShareButton, FacebookShareButton, WhatsappShareButton } from 'react-share';
import { TwitterIcon, FacebookIcon, WhatsappIcon } from 'react-share';
import { GoBroadcast } from 'react-icons/go';

const PostDetail = () => {

  const { pathname, hash } = useLocation();

  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState();
  const [post, setPost] = useState({});
  const [topic, setTopic] = useState({});
  const [comentarios, setComentarios] = useState([]);
  const [updatingComment, setUpdatingComment] = useState(false);
  const [commentToUpdate, setCommentToUpdate] = useState({});
  const [autor, setAutor] = useState({});

  const hashtags = ["ComunidadLSA", "AprenderEsUnaActitud"];

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
    let isSubscribed = true;
    if (post && post.autor) {
      FetchUserDetail(post.autor).then(resp => {
        if (isSubscribed) {
          setAutor(resp)
        }
      });
      return () => isSubscribed = false;
    }
  }, [post]);



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
      <div className="p-3">
        <div className="flex justify-between items-center h-16 my-6 ">
          <div className="flex items-center">
            <Avatar userId={post.autor} />
            <div className="ml-2">
              <div className="text-2xl font-bold">{post.titulo}</div>
              <div className="text-sm font-light text-gray-500">
                {getSignature(autor)} {getDateFormated(post.fecha_creacion)}
              </div>
            </div>
          </div>
        </div>
        {/* <p className="text-2xl font-bold pl-4">{post.titulo}</p> */}
        <div className="w-full p-5">
          <article
            className=""
            dangerouslySetInnerHTML={{ __html: post.cuerpo }}
          ></article>
        </div>
        <div className="hidden sm:flex w-full sm:flex-shrink-0 sm:justify-center mb-5 text-3xl font-bold">
          <h3><GoBroadcast className="inline" /> ¡Dale difusión!</h3>
        </div>

        <div className="hidden sm:flex w-full sm:flex-shrink-0 sm:justify-center">
          <TwitterShareButton
            url={process.env.REACT_APP_FRONTEND_URL + pathname}
            title={post.titulo}
            hashtags={hashtags}
            related={["AprendizajeExt"]}
            className="mx-3"
          >
            <TwitterIcon size={42} round={true} />
          </TwitterShareButton>
          <FacebookShareButton
            url={process.env.REACT_APP_FRONTEND_URL + pathname}
            quote={post.titulo + " " + post.entradilla}
            hashtags={hashtags}
            className="mx-3"
          >
            <FacebookIcon size={42} round={true} />
          </FacebookShareButton>
          <WhatsappShareButton
            url={process.env.REACT_APP_FRONTEND_URL + pathname}
            title={post.titulo}
            className="mx-3"
          >
            <WhatsappIcon size={42} round={true} />
          </WhatsappShareButton>
        </div>

        <div className="sm:hidden flex w-full justify-center">
          <div className="mx-1">
            <TwitterShareButton
              url={process.env.REACT_APP_FRONTEND_URL + pathname}
              title={post.titulo}
              hashtags={hashtags}
              related={["AprendizajeExt"]}
            >
              <TwitterIcon size={42} round={true} />
            </TwitterShareButton>
          </div>
          <div className="mx-1">
            <FacebookShareButton
              url={process.env.REACT_APP_FRONTEND_URL + pathname}
              quote={post.titulo + " " + post.entradilla}
              hashtags={hashtags}
            >
              <FacebookIcon size={42} round={true} />
            </FacebookShareButton>
          </div>
          <div className="mx-1">
            <WhatsappShareButton
              url={process.env.REACT_APP_FRONTEND_URL + pathname}
              title={post.titulo}
            >
              <WhatsappIcon size={42} round={true} />
            </WhatsappShareButton>
          </div>
        </div>

        <div id="article-detail-comments" className="">
          <p className="text-xl font-bold p-3">Comentarios</p>
          <div>
            {comentarios.map((comment, i) => {
              if (
                updatingComment &&
                commentToUpdate &&
                commentToUpdate.id === comment.id
              ) {
                return (
                  <UpdateComment
                    key={i}
                    comment={comment}
                    comentarios={comentarios}
                    setComentarios={setComentarios}
                    setUpdatingComment={setUpdatingComment}
                  />
                );
              } else {
                return (
                  <CommentOfPost
                    key={i}
                    comment={comment}
                    commentIdx={i}
                    setUpdatingComment={setUpdatingComment}
                    setCommentToUpdate={setCommentToUpdate}
                  />
                );
              }
            })}
          </div>
        </div>
        {
          updatingComment === false && (
            <PutCommentOnPost
              post={post}
              comentarios={comentarios}
              setComentarios={setComentarios}
            />
          )
        }
      </div >
    </div >
  );
}

export default PostDetail;