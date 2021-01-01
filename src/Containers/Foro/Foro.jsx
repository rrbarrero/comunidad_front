import { useEffect, useState } from 'react';
import FetchTopics from '../../Services/Forum/FetchTopics';
import TopicItem from './TopicItem/TopicItem';

const Foro = () => {

    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        setIsLoading(true);
        let isSubscribed = true;
        FetchTopics().then(resp => {
            if (isSubscribed) {
                setTopics(resp.results)
                setIsLoading(false);
            }
        });
        return () => isSubscribed = false;
    },[]);

    return (
        <div className="w-full overflow-hidden sm:w-3/4 bg-white">
            <div className="bg-white text-center font-Midnight text-3xl text-red-congreso200 p-3">Temas</div>
            <ul className="divide-y divide-gray-100">
                {topics.map((item, i) => (
                    <TopicItem key={i} item={item} />
                ))}
            </ul>
        </div>
        
    );
}

export default Foro;