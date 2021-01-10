import { useEffect, useState } from 'react';
import './Blog.css';
import ArticleList from './ArticleList/ArticleList';
import NewPreview from './News/NewPreview';

const Blog = () => {

    

    // const articleOneStyle = {
    //     backgroundImage: 'url(https://aprenderesunaactitud.es/wp-content/uploads/2019/06/Congreso-Sociedad-Aprendizaje-en-Merida.jpg)',
    // }
    // const articleTwoStyle = {
    //     backgroundImage: 'url(https://aprenderesunaactitud.es/wp-content/uploads/2019/06/Maldita-Nerea.jpg)',
    // }
    // const articleThreeStyle = {
    //     backgroundImage: 'url(https://aprenderesunaactitud.es/wp-content/uploads/2019/06/formacion-outdoor.jpg)',
    // }

    return (
        <div className="w-full overflow-hidden sm:w-3/4">
            <div className="flex flex-wrap overflow-hidden bg-red-congreso99">
                <NewPreview position={1} />
                <div className="flex flex-wrap ml-1 mt-1 w-full overflow-hidden pb-6">
                    <NewPreview position={2} />
                    <NewPreview position={3} />
                </div>
                <div className="flex flex-wrap w-full overflow-hidden sm:w-full">
                    <ArticleList />
                </div>
            </div>
        </div>
    );
}

export default Blog;