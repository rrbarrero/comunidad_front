import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FetchNewPreview from '../../../Services/Blog/FetchNewPreview';
import FetchCommentsOfNew from '../../../Services/Blog/FetchCommentsOfNew';
import { FaComments } from 'react-icons/fa';
import './NewPreview.css';

const NewPreview = ({ position }) => {

    const [isLoading, setIsLoading] = useState();
    const [newArticle, setNewArticle] = useState('');
    const [commentsCount, setCommentsCount] = useState(0);

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

    useEffect(() => {
        if(newArticle){
            let isSubscribed = true;
            FetchCommentsOfNew(newArticle.id).then(resp => {
                if (isSubscribed) {
                    setCommentsCount(resp.count);
                }
            });
            return () => isSubscribed = false;
        }
    }, [newArticle]);


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
                return "flex hover:shadow-xl justify-between w-full md:text-5xl text-3xl m-1 text-gray-800 hover:text-gray-900 overflow-hidden sm:w-full bg-gradient-to-l md:bg-gradient-to-r border-2 border-red-congreso100 font-Midnight";
            } else {
                return "flex hover:shadow-xl justify-between w-full md:text-2xl text-2xl lg:w-1/2 text-gray-800 hover:text-gray-900 bg-indigo-100 border-2 border-red-congreso100 font-Midnight";
            }
        }
    }

    return (
        <div 
            className={getItemClasses()}
            style={getNewBackgroundStyle()} id={getArticleId()}>
            <Link
                to={{ pathname: `/portadas/${newArticle?.id}` }}>
                        <h1>{newArticle?.titulo}</h1>
            </Link>
            {commentsCount>0 &&
                <Link to={`/portadas/${newArticle?.id}#article-detail-comments`} className="text-gray-600 hover:text-gray-900 text-lg right-0">
                    <button className="hover:bg-blue-congreso p-2 rounded-full text-2xl shadow-md flex justify-center items-center ml-2">
                        {commentsCount} <FaComments className="ml-1 border-transparent"/>
                    </button>
                </Link>
            }
        </div>
    );
}

export default NewPreview;