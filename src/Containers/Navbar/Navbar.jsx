const Navbar = () => {
    return (
        <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <div className="flex lg:w-11/12">
            <nav>
                <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="/">Noticias</a></li>
                <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="/">Foros</a></li>
                <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="/">Registro</a></li>
                <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2" href="/">Support</a></li>
                </ul>
            </nav>
            </div>
            <div className="flex lg:w-1/12">
            <a href="/" className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
                <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg" alt="Andy Leverenz" />
            </a>
            </div>
        </div>

    );
}

export default Navbar;