import LogoHeader from '../../Assets/logo_header.jpeg';

const Header = () => {
    const styleBackground = {
        backgroundImage: 'url(/header.png)',
    }
    return (
        <header className=" xl:bg-yellow-100 lg:bg-yellow-700 md:bg-yellow-400 sm:bg-yellow-600">
            <div className=" md:flex justify-center py-4 ">
                <div className=" p-2 my-auto">
                    
                    <img className="rounded-full h-28 w-28 mx-auto border-8 border-purple-300 "
                        src={LogoHeader} alt="header-logo" />
                </div>
                <div className="p-8  my-auto ">
                    <h1 className="text-orange-100 text-3xl text-center"> Comunidad Sociedad del Aprendizaje </h1>
                    <p className=" text-gray-600 text-xl text-center"> ¡Sé parte del cambio! </p>
                </div>
            </div>
        </header>
    );
}

export default Header;