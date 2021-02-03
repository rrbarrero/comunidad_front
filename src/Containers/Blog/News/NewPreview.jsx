import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FetchNewPreview from '../../../Services/Blog/FetchNewPreview';
import './NewPreview.css';

const NewPreview = ({ position }) => {

    const [isLoading, setIsLoading] = useState();
    const [newArticle, setNewArticle] = useState('');

    useEffect(() => {
        setIsLoading(true);
        let isSubscribed = true;
        FetchNewPreview(position).then(resp => {
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
                return "flex w-full md:text-5xl text-3xl m-1 text-gray-800 hover:text-gray-900 overflow-hidden sm:w-full bg-gradient-to-l md:bg-gradient-to-r border-2 border-red-congreso100 font-Midnight";
            } else {
                return "flex w-full md:text-2xl text-2xl lg:w-1/2 text-gray-800 hover:text-gray-900 bg-indigo-100 border-2 border-red-congreso100 font-Midnight";
            }
        }
    }

    return (
        <Link
            to={{ pathname: `/portadas/${newArticle?.id}` }}
            className={getItemClasses()}
            style={getNewBackgroundStyle()} id={getArticleId()}>
                    <h1>{newArticle?.titulo}</h1>
        </Link>
    );
}

export default NewPreview;