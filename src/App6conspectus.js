import React, { Component } from 'react';
import Container from './components/Container';
import Section from './components/Section';
import articlesApi from './services/articlesApi';

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    articlesApi
      .fetchArticlesWithQuery('react')
      .then(articles => this.setState({ articles }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <Container title="6. Работа с REST API - конспект">
        <Section title="Запрос на Hacker News API">
          {error && <p>Whoops, something went wrong: {error.message}</p>}
          {isLoading && <p>Loading...</p>}
          {articles.length > 0 && <ArticleList articles={articles} />}
        </Section>
      </Container>
    );
  }
}

export default App;
