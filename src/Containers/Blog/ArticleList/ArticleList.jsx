import { useEffect, useState } from 'react';
import FetchArticleCommonList from '../../../Services/Blog/FetchArticleCommonList';
import ArticleListItem from '../ArticleListItem/ArticleListItem';

const ArticleList = ({url, setNextUrl, setPrevUrl, setArticlesCount}) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        FetchArticleCommonList(url).then(resp => {
            setArticles(resp.results);
            setNextUrl(resp.next);
            setPrevUrl(resp.previous);
            setArticlesCount(resp.count);
        });
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