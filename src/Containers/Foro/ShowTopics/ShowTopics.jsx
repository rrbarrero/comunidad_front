import { useEffect, useState } from 'react';
import FetchTopics from '../../../Services/Forum/FetchTopics';
import TopicBox from './TopicBox';

const ShowTopics = () => {

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
        <div className="w-full overflow-hidden sm:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white pb-10">
                {topics.map((item, i) => (
                    <TopicBox key={i} item={item} />
                ))}
                

            </div>
        </div>
        
    );
}

export default ShowTopics;