import { useEffect, useState } from 'react';
import FetchArticleCommonList from '../../../Services/Blog/FetchArticleCommonList';
import ArticleCommon from './ArticleCommon';

const ArticleCommonList = ({url, setNextUrl, setPrevUrl, setArticlesCount}) => {

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
                <ArticleCommon key={i} item={item} />
            ))}
        </div>
    );
}

export default ArticleCommonList;