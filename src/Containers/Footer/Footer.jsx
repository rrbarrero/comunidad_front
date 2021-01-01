import Colaboradores1 from '../../Assets/colaboradores2-congreso-SAEX-1-300x133.png';
import LogoFooter from '../../Assets/logo_footer.jpg';

const Footer = () => {
    return (
        <div className="w-full overflow-hidden ">
            <nav id="footer" className="bg-yellow-congreso100 border-t-2 border-red-congreso100">

                <div className="container mx-auto pt-8 pb-4">

                    <div className="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">

                        <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                                    <img className="round p-5" src={LogoFooter} alt="Logo" />
                        </div>

                        <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">


                            <h4 className="text-red-congreso200 text-2xl font-bold">Recursos</h4>
                            <ul className="nav navbar-nav">
                                <li id="navi-2" className="leading-7 text-sm">
                                    <a className="text-red-congreso200 underline text-small" href="/page-1">
                                        Page 1 </a>
                                </li>
                                <li id="navi-1" className="leading-7 text-sm"><a className="text-red-congreso200 underline text-small" href="/page-2">Page 2</a></li>
                            </ul>


                        </div>

                        <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">
                            <h4 className="text-red-congreso200 text-2xl font-bold">Formacion</h4>
                            <ul className="">
                            <li id="navi-2" className="leading-7 text-sm">
                                <a className="text-red-congreso200 underline text-small" href="/page-1">
                                    Page 1 </a>
                            </li>
                            <li id="navi-1" className="leading-7 text-sm"><a className="text-red-congreso200 underline text-small" href="/page-2">Page 2</a></li>
                            </ul>
                        </div>

                        <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4 pb-6">

                            <h4 className="text-red-congreso200 text-2xl font-bold">Congresos</h4>
                            <ul className="">
                            <li id="navi-2" className="leading-7 text-sm">
                                <a className="text-red-congreso200 underline text-small" href="/page-1">
                                    Page 1 </a>
                            </li>
                            <li id="navi-1" className="leading-7 text-sm"><a className="text-red-congreso200 underline text-small" href="/page-2">Page 2</a></li>
                            </ul>
                        </div>

                    </div>

                            <div className="pt-4 md:flex md:items-center md:justify-center " style={{ borderTop: 1 + 'px', solid: 'white' }}>
                        <ul className="">
                            <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a className="text-red-congreso200 underline text-small" href="/disclaimer">Condiciones legales</a></li>
                            <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a className="text-red-congreso200 underline text-small" href="/cookie">de uso</a></li>
                            <li className="md:mx-2 md:inline leading-7 text-sm" id="footer-navi-2"><a className="text-red-congreso200 underline text-small" href="/privacy">y de cookies</a></li>
                            </ul>
                        </div>

                    </div>



             </nav>
    </div>
    );
}

export default Footer;