import { useEffect, useState } from "react";
import { useParams } from 'react-router';

const PostDetail = ({ isAuthenticated, currentUser }) => {

    const { hiloId } = useParams();
    console.log(hiloId);
    const [isLoading, setIsLoading] = useState();
    const [hilo, setHilo] = useState({});
    

    return (
        <div className="w-full overflow-hidden sm:w-3/4">
            <div className="p-8">
                <p className="text-2xl font-bold pl-4">campo_titulo</p>
                <div className="w-full p-5">
                        {/* {!isLoading && <img className="w-52 lg:w-52 float-left m-5 rounded" src={article.imagen} alt="Artículo imagen" />}
                        {isLoading && <img className="float-left m-5 rounded" src={Spinner} alt="Artículo imagen" />}
                        <article className="" dangerouslySetInnerHTML={{ __html: article.cuerpo }}></article> */}
                </div>
                <div id="article-detail-comments" className="">
                    <p className="text-xl font-bold p-3">Comentarios</p>
                    <div>
                        {/* {comentarios.map((comment, i) => (
                            <CommentArticle key={i} comment={comment} commentIdx={i} />
                        ))} */}
                    </div>
                </div>
                {/* <PostComment
                    currentUser={currentUser}
                    article={article}
                    isAuthenticated={isAuthenticated}
                    comentarios={comentarios}
                    setComentarios={setComentarios}
                /> */}
            </div>
        </div>
    );
}

export default PostDetail;