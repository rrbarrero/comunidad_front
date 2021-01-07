import { useEffect, useState, useContext } from "react";
import FetchUserDetail from '../../../Services/User/FetchUserDetail';
import canUpdate from '../../../Services/Common/Misc';
import Avatar from '../../Common/Avatar';
import moment from 'moment';
import 'moment/locale/es';
import { UserContext } from '../../../App';
import { FaEdit } from 'react-icons/fa';

const CommentArticle = ({ comment, commentIdx,  setUpdatingComment, setCommentToUpdate }) => {
    
    const {isAuthenticated, currentUser} = useContext(UserContext);

    const [autor, setAutor] = useState('');
    const [isLoading, setIsLoading] = useState();

    const dtFormated = () => {
        moment.locale('es');
        return moment(comment.fecha_creacion).fromNow();
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
    }, [comment])
    
    const HandleUpdate = () => {
        setUpdatingComment(true);
        setCommentToUpdate(comment);
    }

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
                <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal" dangerouslySetInnerHTML={{ __html: comment.cuerpo }}></p>
            </div>
            {(canUpdate(comment, currentUser)===true) &&
            <div className="bg-blue pl-2 flex text-xl w-1/12">
                <FaEdit onClick={HandleUpdate} />
            </div>
            }
        </div>
    )
}

export default CommentArticle;