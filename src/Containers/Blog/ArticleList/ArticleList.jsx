import { useEffect, useState } from 'react';
import FetchArticleCommonList from '../../../Services/Blog/FetchArticleCommonList';
import ArticleListItem from '../ArticleListItem/ArticleListItem';

const ArticleList = ({url, setNextUrl, setPrevUrl, setArticlesCount}) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let isSubscribed = true;
        FetchArticleCommonList(url).then(resp => {
            if (isSubscribed) {
                setArticles(resp.results);
                setNextUrl(resp.next);
                setPrevUrl(resp.previous);
                setArticlesCount(resp.count);
            }
        });
        return () => isSubscribed = false;
    }, [url, setNextUrl, setPrevUrl, setArticlesCount]);

    return (
        <div>
            {articles.map((item, i) => (
                <ArticleListItem key={i} item={item} />
            ))}
        </div>
    );
}

export default ArticleList;