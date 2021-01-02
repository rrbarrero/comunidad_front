import { useEffect, useState } from "react";
import FetchUserDetail from '../../../Services/User/FetchUserDetail';
import Avatar from '../../Common/Avatar';

const CommentOfPost = ({ comment, commentIdx }) => {
    
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
        <div className="p-4 bg-blue-congreso100 flex items-start justify-start w-full">
            <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg w-full">
                <div className="float-right">
                    <span className="text-6xl font-bold text-red-200 font-Blackout float-left mr-2">{commentIdx + 1}</span>
                </div>
                <div className="flex mb-4">
                <Avatar userId={autor.id} />
                <div className="ml-2 mt-0.5">
                    <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">{autor.username}</span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">{dtFormated()}</span>
                </div>
                </div>
                <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal" dangerouslySetInnerHTML={{ __html: comment.cuerpo }}>
                </p>
            </div>
        </div>
    );
}

export default CommentOfPost;