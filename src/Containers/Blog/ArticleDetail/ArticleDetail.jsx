import { useEffect, useState } from "react";
import CommentArticle from '../CommentArticle/CommentArticle';
import FetchArticleDetail from '../../../Services/Blog/FetchArticleDetail';
import FetchCommentsOfArticle from '../../../Services/Blog/FetchCommentsOfArticle';
import Spinner from '../../../Assets/spinner.gif';

const ArticleDetail = ({ articuloId }) => {
    
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState();
    const [comentarios, setComentarios] = useState([]);


    useEffect(() => {
        if (articuloId) {
            setIsLoading(true);
            let isSubscribed = true;
            FetchArticleDetail(articuloId).then(resp => {
                if (isSubscribed) {
                    setArticle(resp);
                    setIsLoading(false);
                }
            });
            FetchCommentsOfArticle(articuloId).then(resp => {
                if (isSubscribed) {
                    setComentarios(resp.results);
                }
            });
            return () => isSubscribed = false;
        }
    }, [articuloId]);


    return (
        <div>
            <p className="text-2xl font-bold">{article.titulo}</p>
            <div className="w-full p-5">
                    {!isLoading && <img className="w-52 lg:w-52 float-left m-5 rounded" src={article.imagen} alt="Artículo imagen" />}
                    {isLoading && <img className="float-left m-5 rounded" src={Spinner} alt="Artículo imagen" />}
                    <article className="text-sm " dangerouslySetInnerHTML={{ __html: article.cuerpo }}></article>
            </div>
            <div>
                {comentarios.map((comment, i) => (
                    <CommentArticle key={i} comment={comment} />
                ))}
            </div>
        </div>
    );
}

export default ArticleDetail;