import LogoDerecha from '../../Assets/cebra.png';
import LogoIzquierda from '../../Assets/circulo.png';

const Header = () => {
    // const styleBackground = {
    //     backgroundImage: 'url(/header.png)',
    // }

    return (
        <header className="flex w-full bg-red-cabecera p-4">
                <div className="hidden lg:flex lg:w-3/12 lg:flex-row-reverse">
                    <img className="rounded-full hidden lg:inline-flex h-40 w-40" src={LogoIzquierda} alt="header-logo" />
                </div>
                <div className="flex w-full lg:w-6/12">
                    <h1 id="header-title" className="text-white text-2xl lg:text-7xl font-bold text-center font-DINCondensed uppercase">La Comunidad de la Sociedad del Aprendizaje </h1>
                </div>
                <div className="hidden lg:flex lg:w-3/12 lg:flex-row items-left">
                    <img className="rounded-full hidden lg:inline-flex h-40 w-40" src={LogoDerecha} alt="header-logo" />
                </div>
        </header>
    );
}

export default Header;