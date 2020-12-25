const Header = () => {
    const styleBackground = {
        backgroundImage: 'url(/header.png)',
    }
    return (
        <div className="bg-gradient-to-r from-pink-200 via-purple-400 to-purple-800 w-full px-2 h-20">
            <div className="container mx-auto rounded-t shadow bg-cover bg-bottom m-4">
        
            <nav className="flex justify-between p-8 items-center mb-16">
                <a href="/" className="hidden md:inline-flex font-sans text-black-500 text-xl md:text-4xl font-bold">Comunidad La Sociedad del Aprendizaje</a>
                <ul className="list-reset flex">
                    <li><a href="/" className="hidden md:inline-flex text-black md:text-white p-2 md:p-4 whitespace-no-wrap">Sobre CLSA</a></li>
                    <li><a href="/" className="hidden md:inline-flex text-black md:text-white p-2 md:p-4">Contacto</a></li>
                </ul>
                <a href="/" className="md:hidden font-sans text-black-500 text-xl text-4xl font-bold">Comunidad LSA</a>
            </nav>
            
            <div className="text-center text-white pb-16">
                <h1 className="font-sans font-thin">Reality is just a matter of perception.</h1>
                <h2 className="font-thin text-sm tracking-wide mt-2 mb-4">There are no limits, except for those that we impose on ourselves. Join the future</h2>
            
                    <a href="/" className="rounded bg-orange text-white p-4 font-bold inline-block mb-16">
                        Apply Now
                    </a>
            </div>
         </div>
  
        </div>
    );
}

export default Header;