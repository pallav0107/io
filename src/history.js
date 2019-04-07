import { createBrowserHistory } from 'history';

// Since react-redux-router is still in development for react-router v4. We are creating history and using it in routing
// and middlewares. More info:  https://github.com/ReactTraining/react-router/blob/master/FAQ.md#how-do-i-access-the-history-object-outside-of-components
export default createBrowserHistory({
  basename: '/',
});
