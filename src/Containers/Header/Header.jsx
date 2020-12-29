import LogoHeader from '../../Assets/logo_header.jpeg';
import './Header.css';

const Header = () => {
    const styleBackground = {
        backgroundImage: 'url(/header.png)',
    }
    return (
        <header className=" bg-yellow-congreso100">
            <div className=" md:flex justify-center py-4 ">
                <div className=" p-2 my-auto">
                    
                    <img className="rounded-full h-28 w-28 mx-auto border-8 border-red-congreso100"
                        src={LogoHeader} alt="header-logo" />
                </div>
                <div className="p-8  my-auto ">
                    <h1 id="header-title" className="text-orange-100 text-5xl font-bold text-center font-lsaFamily"> Comunidad Sociedad del Aprendizaje </h1>
                    <p className=" text-gray-600 text-xl text-center"> ¡Sé parte del cambio! </p>
                </div>
            </div>
        </header>
    );
}

export default Header;