import { useEffect, useState } from 'react';
import FetchArticleCommonList from '../../../Services/Blog/FetchArticleCommonList';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import Pagination from '../../Common/Pagination';

const ArticleList = () => {

    const [url, setUrl] = useState('');
    const [articles, setArticles] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);
    const [prevUrl, setPrevUrl] = useState(null);
    const [articlesCount, setArticlesCount] = useState(0);

    if (url === '') {
        setUrl(`${process.env.REACT_APP_API_URL}blog/articulos`);
    }

    const handleNext = () => {
        if (nextUrl) {
            setUrl(nextUrl);
            document
              .getElementById("article-list")
              .scrollIntoView({ behavior: "smooth" });
        } else {
            return () => { };
        }
    }

    const handlePrev = () => {
        if (prevUrl) {
            setUrl(prevUrl);
            document
              .getElementById("article-list")
              .scrollIntoView({ behavior: "smooth" }); 
        } else {
            return () => { };
        }
    }

    useEffect(() => {
        let isSubscribed = true;
        FetchArticleCommonList(url).then(resp => {
            if (isSubscribed) {
                setArticles(resp?.results);
                setNextUrl(resp?.next);
                setPrevUrl(resp?.previous);
                setArticlesCount(resp?.count);
            }
        });
        return () => isSubscribed = false;
    }, [url]);

    return (
      <div id="article-list">
        {articles?.map((item, i) => (
          <ArticleListItem key={i} item={item} />
        ))}
        {articlesCount>process.env.REACT_APP_ARTICLES_PER_PAGE && (
          <Pagination
            handleNext={nextUrl ? handleNext : null}
            handlePrev={prevUrl ? handlePrev : null}
            nextString="Artículos anteriores"
            prevString="Artículos siguientes"
          />
        )}
      </div>
    );
}

export default ArticleList;