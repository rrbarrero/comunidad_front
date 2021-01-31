import { useContext } from 'react';
import AddCommentToPost from '../../../Services/Forum/AddCommentToPost';
import { FaDiaspora } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const PutCommentOnPost = ({
    post,
    comentarios,
    setComentarios }) => {
    
    let commentMsg;
    const {isAuthenticated, currentUser} = useContext(UserContext);
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (isAuthenticated) {
            AddCommentToPost(post.id, currentUser, commentMsg).then(resp => {
                if (resp.status!==201) {
                    Object.values(resp.data).forEach((x) => toast.warning(x));
                } else {
                    setComentarios([...comentarios, resp.data]);
                    document.getElementById('commentBody').value = "";
                }
            });
        }
    }

    const postCommentView = () => {
        if (isAuthenticated) {
            return (
              <div className="flex mx-auto items-start justify-start shadow-lg w-full">
                <ToastContainer />
                <form
                  onSubmit={handleSubmit}
                  className="w-full bg-blue-congreso100 rounded-lg px-4 pt-2"
                >
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <h2 className="px-4 pt-3 pb-2 text-red-congreso200 text-lg">
                      Deja un comentario
                    </h2>
                    <div className="w-full md:w-full px-3 mb-2 mt-2">
                      <textarea
                        className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white"
                        name="commentBody"
                        id="commentBody"
                        placeholder="Escribe tu comentario"
                        value={commentMsg}
                        onChange={(e) => (commentMsg = e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="w-full md:w-full flex items-start md:w-full px-3">
                      <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                        <svg
                          fill="none"
                          className="w-5 h-5 text-gray-600 mr-1"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="-mr-1">
                        <input
                          type="submit"
                          className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                          value="Publicar comentario"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            );
        }
        return (
            <div className="shadow-lg rounded-lg bg-white mx-auto m-8 p-4 notification-box">
                <div className="text-sm pb-2 text-xl">
                    ¿Quieres participar?
                    <span className="float-right">
                        <FaDiaspora className="text-xl" />
                    </span>
                </div>
                <div className="text-sm text-gray-600  tracking-tight ">
                    <Link to={{ pathname: "/login" }} className="text-purple-400 hover:text-purple-600">Inicia sesión</Link> o <Link to={{ pathname: "/registro" }} className="text-purple-400 hover:text-purple-600">regístrate</Link> para comentar
                </div>
            </div>
        );
    }
    return postCommentView();
}

export default PutCommentOnPost;