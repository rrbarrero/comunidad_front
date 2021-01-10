import LogoHeader from '../../Assets/logo_header.jpeg';

const Header = () => {
    // const styleBackground = {
    //     backgroundImage: 'url(/header.png)',
    // }

    return (
        <div className="w-full overflow-hidden">
            <header className="bg-gradient-to-r from-yellow-congreso98 via-yellow-congreso99 to-yellow-congreso100">
                <div className=" md:flex justify-center py-4 ">
                    <div className=" p-2 my-auto">
                        
                        <img className="rounded-full h-28 w-28 mx-auto border-8 border-red-congreso100"
                            src={LogoHeader} alt="header-logo" />
                    </div>
                    <div className="p-8  my-auto ">
                        <h1 id="header-title" className="text-red-congreso200 text-5xl font-bold text-center font-Midnight"> Comunidad Sociedad del Aprendizaje </h1>
                        <p className=" text-xl text-center text-3xl text-gray-congreso100 font-Blackout mt-5"> SÉ PARTE DEL CAMBIO </p>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;