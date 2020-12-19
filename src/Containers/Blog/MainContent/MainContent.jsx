import './MainContent.css';

const MainContent = () => {

    const articleOneStyle = {
        backgroundImage: 'url(https://aprenderesunaactitud.es/wp-content/uploads/2019/06/Congreso-Sociedad-Aprendizaje-en-Merida.jpg)',
    }
    const articleTwoStyle = {
        backgroundImage: 'url(https://aprenderesunaactitud.es/wp-content/uploads/2019/06/Maldita-Nerea.jpg)',
    }
    const articleThreeStyle = {
        backgroundImage: 'url(https://aprenderesunaactitud.es/wp-content/uploads/2019/06/formacion-outdoor.jpg)',
    }

    
    return (
        <div className="flex flex-wrap overflow-hidden">
            <a href="/noticia/1" className="flex w-full overflow-hidden sm:w-full bg-gradient-to-l md:bg-gradient-to-r" style={articleOneStyle} id="article-1">
                <h1>Título noticia principal</h1>
            </a>
            <div className="flex flex-wrap w-full overflow-hidden sm:w-full">
                <a href="/noticia/2" className="flex w-full lg:w-1/2 bg-indigo-100" style={articleTwoStyle} id="article-2">
                    <h1>Articulo Secundario Izquierdo</h1>
                </a>
                <a href="/noticia/2" className="flex w-full lg:w-1/2 bg-purple-500" style={articleThreeStyle} id="article-3">
                    <h1>Articulo Secundario Derecho</h1>
                </a>
            </div>
            <div className="flex flex-wrap w-full overflow-hidden sm:w-full bg-yellow-100">
                
            </div>
        </div>
    );
}

export default MainContent;