import { Link } from 'react-router-dom';

const TopicBox = ({ item }) => {
    return (
            <Link to={{ pathname: `/tema/${item.id}` }}>
                <div className="grid grid-cols-2 items-start h-50 min-h-full gap-2 mt-5 p-4 m-2 shadow-md bg-blue-congreso100 opacity-80 hover:opacity-100">
                    <div>
                        <img className="rounded-lg border-2 border-red-congreso100 w-40" src={item.imagen} alt="logo topic" />
                    </div>
                    <div>
                        <p className="uppercase font-Midnight text-md text-red-congreso200">{item.nombre}</p>
                        <p className="text-sm italic font-gray-congreso100">{item.descripcion_corta}</p>
                    </div>
                </div>
            </Link>
        );
    }

export default TopicBox;