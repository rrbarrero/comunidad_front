import { useEffect, useState } from "react";
import FetchUserDetail from '../../../Services/User/FetchUserDetail';
import Avatar from '../../Common/Avatar';
import { FaComment } from 'react-icons/fa';

const CommentArticle = ({ comment, commentIdx }) => {
    
    const [autor, setAutor] = useState('');
    const [isLoading, setIsLoading] = useState();

      const dtFormated = () => {
        const date = new Date(comment.fecha_creacion);
        return date.toLocaleDateString();
    }

    useEffect(() => {
        if (comment.autor) {
            let isSubscribed = true;
            setIsLoading(true);
            FetchUserDetail(comment.autor).then(resp => {
                if (isSubscribed) {
                    setAutor(resp);
                    setIsLoading(false);
                }
            });
            return () => isSubscribed = false;
        }
    },[comment])

    return (
        <div className="p-4 bg-gray-50 dark:bg-gray-900 flex items-start justify-start w-full">
            <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg w-full">
                <div className="flex mb-4">
                <Avatar userId={autor.id} />
                <div className="ml-2 mt-0.5">
                    <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">{autor.username}</span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">{dtFormated()}</span>
                </div>
                </div>
                <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal"><span className="text-4xl font-bold text-purple-400 float-left mr-2">{commentIdx+1}</span><FaComment className="text-1xl text-purple-400 font-bold float-left mb-1 mr-5"/>{comment.cuerpo}</p>
            </div>
        </div>
    );
}

export default CommentArticle;