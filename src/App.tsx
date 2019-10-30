import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Stories from './lazyloading/StoriesLazyLoading';
import Comments from './lazyloading/CommentsLazyLoading';
import './App.css';

/**
 * Lazy loading allows us to improve performance, to load app very quickly (chunk JS and CSS files by route)
 * Also redux-saga works great with lazy loading, we can make the greatest improvements in API call,
 * and improve redux store management for some data as well.
 */
const Home = lazy(() => import(/* webpackChunkName: 'home' */ './components/Home'));

const Author = lazy(() => import(/* webpackChunkName: 'author' */ './components/Author'));

const App: React.FC = () => {

  return (
    <div className="App m-4">
      <Router>
        <div>
          <h1>Simple React App - Test</h1>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav text-left">
              <li><Link to={'/'} className="nav-link">Home</Link></li>
              <li><Link to={'/stories'} className="nav-link">Top 10 Stories</Link></li>
              <li><Link to={'/author'} className="nav-link">Author</Link></li>
            </ul>
          </nav>
          <hr />
          <Suspense fallback={<></>}>
            <Switch>
                <Route exact path='/' component={Home} key='0' />
                <Route path='/stories' component={Stories} key='1' />
                <Route path='/story/:id/comments' component={Comments} key='2' />
                <Route path='/author' component={Author} key='3' />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
