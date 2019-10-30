import { lazy } from 'react';

export default lazy(() => import(/* webpackChunkName: 'stories' */ '../components/Stories').then(() => {
    /**
     * Here we can do saga to improve performance
     */
    return import('../components/Stories');
}));
