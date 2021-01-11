import { Link } from 'react-router-dom';

const TopicItem = ({ item }) => {
    return (
        <Link to={{ pathname: `/temas/${item.id}` }}>
            <article className="p-4 flex space-x-4 border-2 border-red-congreso99 hover:border-red-congreso200">
                <img src={item.imagen} alt="" className="flex-none w-24 h-24 rounded-lg object-cover bg-gray-100" width="144" height="144" />
                <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                    <h2 className="text-lg font-semibold text-red-congreso200 text-black mb-0.5">
                    {item.nombre}
                    </h2>
                    <dl className="flex flex-wrap text-sm font-medium">
                        <div className="flex-none w-full mt-0.5 font-normal italic">
                            <dt className="sr-only">Descripción</dt>
                            <dd> {item.descripcion}</dd>
                        </div>
                        {/* <div>
                            <dt className="sr-only">Servings</dt>
                            <dd>Hilos</dd>
                        </div> */}
                    </dl>
                </div>
            </article>
        </Link>
    );
}

export default TopicItem;