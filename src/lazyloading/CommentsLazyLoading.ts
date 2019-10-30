import { lazy } from 'react';

export default lazy(() => import(/* webpackChunkName: 'comments' */ '../components/Comments').then(() => {
    /**
     * Here we can do saga to improve performance
     */
    return import('../components/Comments');
}));
