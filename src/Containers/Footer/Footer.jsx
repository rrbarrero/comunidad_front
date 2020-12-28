const Footer = () => {
    return (
        <div className="w-full">
            <svg className="z-0 absolute" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 600 600">
            <g transform="translate(300,300)">
                <path d="M108.7,-102.8C139.7,-47.8,163,-2.6,157.3,41.4C151.6,85.4,117,128.3,71.9,150.5C26.8,172.7,-28.9,174.2,-85.4,155.4C-141.9,136.6,-199.1,97.6,-217.2,42.6C-235.3,-12.3,-214.2,-83.2,-171.5,-140.9C-128.7,-198.7,-64.4,-243.3,-12.8,-233.2C38.8,-223,77.7,-157.9,108.7,-102.8Z" fill="#7adcb58c"/>
            </g>
            </svg>
            <div className="flex flex-row bg-teal-100 rounded">
                <div className="relative z-2 max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="relative text-teal-900 font-bold text-xl mb-2">Comunidad Sociedad del Aprendizaje</div>
                        <p className="text-gray-700 text-base z-234 ">
                            La inversión en formación, metodologías y recursos en la sociedad, fomentando la generación de contextos para el aprendizaje, es una estrategia prioritaria para la Junta de Extremadura.
                        </p>
                        <div className="text-teal-900 font-bold text-xl mt-2 mb-2">Síguenos</div>
                        <div className=" flex flex-wrap  justify-">
                            <div className="rounded w-auto flex-1 text-gray-700 text-center bg-teal-400 hover:bg-teal-600 px-4 py-2 m-2">1</div>
                            <div className="rounded w-auto flex-1 text-gray-700 text-center bg-teal-400 hover:bg-teal-600 px-4 py-2 m-2">2</div>
                            <div className="rounded w-auto flex-1 text-gray-700 text-center bg-teal-400 hover:bg-teal-600 px-4 py-2 m-2">3</div>
                            <div className="rounded w-auto flex-1 text-gray-700 text-center bg-teal-400 hover:bg-teal-600 px-4 py-2 m-2">4</div>
                            <div className="rounded w-auto flex-1 text-gray-700 text-center bg-teal-400 hover:bg-teal-600 px-4 py-2 m-2">5</div>
                        </div>
                        <div className="text-xs text-center text-teal-900  mt-5 ">© LSA</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;