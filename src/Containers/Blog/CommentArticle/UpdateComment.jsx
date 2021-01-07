import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../App';
import UpdateCommentArticle from '../../../Services/Blog/UpdateCommentArticle';

const UpdateComment = ({ comment, comentarios, setComentarios, setUpdatingComment }) => {

    const { isAuthenticated, currentUser } = useContext(UserContext);
    const [commentMsg, setCommentMsg] = useState();
    const [error, setError] = useState([]);

    useEffect(() => {
        setCommentMsg(comment.cuerpo);
    }, [comment]);
    

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(isAuthenticated) {
            UpdateCommentArticle(comment, currentUser, commentMsg).then(resp => {
                if (resp.status!==200) {
                    let errors = [];
                    for (var [_v, value] of Object.entries(resp.data)){
                        errors.push(value);
                    };
                    setError(errors);
                } else {
                    let oldElements = [...comentarios];
                    const currentComment = (element) => element.id === resp.data.id; 
                    const currentIdx = oldElements.findIndex(currentComment);
                    oldElements[currentIdx] = resp.data;
                    setComentarios(oldElements);
                    setUpdatingComment(false);
                }
            });
        }
    }

    return (
        <div className="flex mx-auto items-start justify-start shadow-lg w-full">
            <form onSubmit={handleSubmit} className="w-full bg-blue-congreso100 rounded-lg px-4 pt-2">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <h2 className="px-4 pt-3 pb-2 text-red-congreso200 text-lg">Editar comentario</h2>
                    <div className="w-full md:w-full px-3 mb-2 mt-2">
                        <textarea
                            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white"
                            name="commentBody"
                            id="commentBody"
                            placeholder='Escribe tu comentario'
                            value={commentMsg}
                            onChange={(e) => setCommentMsg(e.target.value)}
                            required>
                        </textarea>
                    </div>
                    <div className="w-full md:w-full flex items-start md:w-full px-3">
                        <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                        <svg fill="none" className="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        </div>
                        <div className="-mr-1">
                            <input type='submit' className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Publicar comentario' />
                        </div>                                        
                    </div>
                </div>
            </form>
        </div>
    );
}
    
    
export default UpdateComment;