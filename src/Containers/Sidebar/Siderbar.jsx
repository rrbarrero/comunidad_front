import { useEffect, useState } from 'react';
import { FaCalendar } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
//import { FaPoll } from "react-icons/fa";
//import { FaQuestion } from "react-icons/fa";
import FetchLastPosts from "../../Services/Sidebar/FetchLastPosts";
import FetchFeatured from '../../Services/Sidebar/FetchFeatured';
import FetchLastCommentPost from '../../Services/Sidebar/FetchLastCommentPost';
import { Link } from 'react-router-dom';
//import Avatar from "../Common/Avatar";

const Sidebar = () => {

    const [lastPosts, setLastPosts] = useState([]);
    const [featuredPost, setFeaturedPost] = useState([]);
    const [lastCommentPost, setLastCommentPost] = useState([]);
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
      setIsLoading(true);
      let isSubscribed = true;
      FetchLastPosts().then((resp) => {
        if (isSubscribed) {
          setLastPosts(resp?.results);
          setIsLoading(false);
        }
      });
      return () => (isSubscribed = false);
    }, []);

    useEffect(() => {
        setIsLoading(true);
        let isSubscribed = true;
        FetchFeatured().then(resp => {
            if (isSubscribed) {
                setFeaturedPost(resp?.results);
                setIsLoading(false);
            }
        });
        return () => isSubscribed = false;
    }, []);

    useEffect(() => {
      setIsLoading(true);
      let isSubscribed = true;
      FetchLastCommentPost().then(resp => {
          if (isSubscribed) {
              setLastCommentPost(resp?.results);
              setIsLoading(false);
          }
      });
      return () => isSubscribed = false;
  }, []);
    
    const FeaturedItem = ({item}) => {
        return <li>
            <Link
                to={{ pathname: `/hilos/${item.id}` }}
                className="block transform transition-colors duration-200 py-2 hover:text-gray-900">{item.titulo}
            </Link></li>
    }

    return (
      <div className="w-full overflow-hidden  sm:w-1/4">
        <div className="flex h-full border-l-2 border-white flex-col justify-between overflow-y-auto sticky max-h-(screen-18) pt-10 pl-8 pb-6 top-18 bg-yellow-congreso98">
          <div className="mb-8 pr-4">
            {/* <h5 className="text-red-congreso200 uppercase tracking-wide font-semibold mb-3 text-sm lg:text-md">
              <FaCalendar className="inline" /> Pr??ximos eventos
            </h5>
            <ul className="overflow-x-hidden text-gray-500 font-medium">
              <li>
                <a
                  href="https://congresodelaprendizaje.juntaex.es/"
                  className="block transform transition-colors duration-200 py-2 hover:text-gray-900"
                >
                  25 de Enero, 8:30 - "Nuestra ciudad virtual despierta"
                </a>
              </li>
              <li>
                <a
                  href="https://congresodelaprendizaje.juntaex.es/"
                  className="block transform transition-colors duration-200 py-2 hover:text-gray-900"
                >
                  25 de Enero, 9:30 - "Inauguraci??n del III Congreso"
                </a>
              </li>
              <li>
                <a
                  href="https://congresodelaprendizaje.juntaex.es/"
                  className="block transform transition-colors duration-200 py-2 hover:text-gray-900"
                >
                 25 de Enero, 8:30 - "Nuestra ciudad virtual despierta"
                </a>
              </li>
              <li>
                <a
                  href="https://congresodelaprendizaje.juntaex.es/"
                  className="block transform transition-colors duration-200 py-2 hover:text-gray-900"
                >
                  El juego de mesa. V??nculo entre neurociencia y competencia emprendedora: Jueves 21 Enero 19h.
                </a>
              </li>
              <li>
                <a
                  href="https://congresodelaprendizaje.juntaex.es/"
                  className="block transform transition-colors duration-200 py-2 hover:text-gray-900"
                >
                  Escape room. Diversi??n, reto y gesti??n de habilidades cooperativas: Viernes 22 Enero 19h.
                </a>
              </li>
            </ul>
            <br /> */}
            <h5 className="text-red-congreso200 uppercase tracking-wide font-semibold mb-3 text-sm lg:text-md">
              <FaStar className="inline" /> Hilos recientes
            </h5>
            <ul className="overflow-x-hidden text-gray-500 font-medium">
              {lastPosts?.map((item, i) => (
                <FeaturedItem key={i} item={item} />
              ))}
            </ul>
            <br />

            <h5 className="text-red-congreso200 uppercase tracking-wide font-semibold mb-3 text-sm lg:text-md">
              <FaStar className="inline" /> Destacados
            </h5>
            <ul className="overflow-x-hidden text-gray-500 font-medium">
              {featuredPost?.map((item, i) => (
                <FeaturedItem key={i} item={item} />
              ))}
            </ul>
            <br />

            <h5 className="text-red-congreso200 uppercase tracking-wide font-semibold mb-3 text-sm lg:text-md">
              <FaStar className="inline" /> ??ltimos comentarios
            </h5>
            <ul className="overflow-x-hidden text-gray-500 font-medium">
              {lastCommentPost?.map((item, i) => (
                <FeaturedItem key={i} item={item} />
              ))}
            </ul>
            <br />
            {/* <h5 className="text-red-congreso200 uppercase tracking-wide font-semibold mb-3 text-sm lg:text-md">
              <FaPoll className="inline" /> ??ltimas encuestas
            </h5>
            <ul className="overflow-x-hidden text-gray-500 font-medium">
              <li>
                <a
                  href="#float-right"
                  className="block transform transition-colors duration-200 py-2 hover:text-gray-900"
                >
                  ??Con qu?? rol de Belbin te identificas m??s?
                </a>
              </li>
            </ul> */}
            <br />
            {/* <h5 className="text-red-congreso200 uppercase tracking-wide font-semibold mb-3 text-sm lg:text-md">
              <FaQuestion className="inline" /> Preg??ntame
            </h5>
            <ul className="overflow-x-hidden text-gray-500 font-medium">
              <li>
                <a
                  href="#float-right"
                  className="block transform transition-colors duration-200 py-2 hover:text-gray-900"
                >
                  <Avatar userId={200} />
                  Soy Roberto Rodr??guez desarrollador de software. Preg??ntame
                  Lunes 17 de Enero a las 13h.
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    );
}
export default Sidebar;