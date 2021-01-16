import actitud_logo from '../../Assets/SAEX-cuestion-de-actitud-1.png';
import saexLogo from '../../Assets/fundacion_cultura_logo.webp';
import bgPattern from '../../Assets/footer_background.webp'
import { FaEye, FaBook, FaCalendarDay } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="w-full overflow-hidden ">
            <nav id="footer"
                className="bg-gray-congreso200 border-t-2 border-red-congreso100 p-5"
                style={{ backgroundImage: `url(${bgPattern})` }} >

                <div className="container mx-auto pt-8 pb-4">

                    <div className="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">

                        <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3 pb-6">


                            <h4 className="text-blue-congreso200 text-4xl font-bold font-Blackout"><FaEye className="inline"/> Recursos</h4>
                            <ul className="uppercase pl-2">
                                <li id="navi-2" className="leading-7 text-sm">
                                    <a className="text-blue-congreso200 text-small" href="https://aprenderesunaactitud.es/recursos/">
                                        Recursos, materiales, nuevas metodologías... </a>
                                </li>
                            </ul>


                        </div>

                        <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3 pb-6">
                            <h4 className="text-blue-congreso200 text-4xl font-bold font-Blackout"><FaBook className="inline"/> Formación</h4>
                            <ul className="pl-2 uppercase">
                            <li id="navi-2" className="leading-7 text-sm">
                                <a className="text-blue-congreso200 text-small" href="https://aprenderesunaactitud.es/formacion/">
                                    Aprender es una Actitud </a>
                            </li>
                            </ul>
                        </div>

                        <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3 pb-6">

                            <h4 className="text-blue-congreso200 text-4xl font-bold font-Blackout"><FaCalendarDay className="inline"/> Congresos</h4>
                            <ul className="pl-2 uppercase">
                            <li id="navi-2" className="leading-7 text-sm">
                                <a className="text-blue-congreso200 text-small" href="https://aprenderesunaactitud.es/3congreso/">
                                    Inscripción </a>
                            </li>
                             <li id="navi-2" className="leading-7 text-sm">
                                <a className="text-blue-congreso200 text-small" href="https://aprenderesunaactitud.es/3congresowebinars/">
                                    Webinars </a>
                                </li>
                            <li id="navi-2" className="leading-7 text-sm">
                                <a className="text-blue-congreso200 text-small" href="https://aprenderesunaactitud.es/congreso-directo/">
                                    Directo </a>
                            </li>
                            </ul>
                        </div>

                    </div>
                    <div className="flex">
                        <div className="w-1/2">
                            <img className="round w-24 md:w-40 p-5 float-right" src={actitud_logo} alt="Logo" />
                        </div>
                        <div className="w-1/2">
                                <img className="round w-36 md:w-64 p-5 float-left" src={saexLogo} alt="Logo" />
                        </div>
                    </div>
                    <div className="pt-4 md:flex md:items-center md:justify-center " style={{ borderTop: 1 + 'px', solid: 'white' }}>
                        <ul className="">
                            <li className="md:mx-2 md:inline leading-7 underline text-sm" id="footer-navi-2"><a className="text-blue-congreso100 text-small" href="/disclaimer">Condiciones legales</a></li>
                            <li className="md:mx-2 md:inline leading-7 underline text-sm" id="footer-navi-2"><a className="text-blue-congreso100 text-small" href="/cookie">de uso</a></li>
                            <li className="md:mx-2 md:inline leading-7 underline text-sm" id="footer-navi-2"><a className="text-blue-congreso100 text-small" href="/privacy">y de cookies</a></li>
                            </ul>
                        </div>
                    </div>



             </nav>
    </div>
    );
}

export default Footer;