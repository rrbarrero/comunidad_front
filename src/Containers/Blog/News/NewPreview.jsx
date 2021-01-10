import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FetchNewDetail from '../../../Services/Blog/FetchNewDetail';
import './NewPreview.css';

const NewPreview = ({ position }) => {

    const [isLoading, setIsLoading] = useState();
    const [newArticle, setNewArticle] = useState('');

    useEffect(() => {
        setIsLoading(true);
        let isSubscribed = true;
        FetchNewDetail(position).then(resp => {
            if (isSubscribed) {
                setNewArticle(resp);
            }
        });
        return () => isSubscribed = false;
    }, [position]);
    
    const getArticleId = () => {
        if (newArticle && newArticle.posicion) {
            return "article-" + newArticle.posicion;    
        }
        return "";
    }

    const getNewBackgroundStyle = () => {
        if (newArticle && newArticle.imagen) {
            return {
                backgroundImage: 'url(' + newArticle.imagen + ')',
            }
        }
        return {
                backgroundImage: 'url()',
        };
    }
    
    const getItemClasses = () => {
        if (newArticle && newArticle.posicion) {
            if (newArticle.posicion === "1") {
                return "flex w-full ml-1 text-gray-700 hover:text-gray-900 overflow-hidden sm:w-full bg-gradient-to-l md:bg-gradient-to-r border-2 border-red-congreso100 font-Midnight";
            } else {
                return "flex w-full lg:w-1/2 text-gray-700 hover:text-gray-900 bg-indigo-100 border-2 border-red-congreso100 font-Midnight";
            }
        }
    }

    return (
        <Link
            to={{ pathname: `/noticias/${newArticle.id}` }}
            className={getItemClasses()}
            style={getNewBackgroundStyle()} id={getArticleId()}>
                    <h1>{newArticle.titulo}</h1>
        </Link>
    );
}

export default NewPreview;