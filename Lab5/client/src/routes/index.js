/* eslint-disable */

import Docs from '../components/Docs';
import Markdown from '../components/Markdown';

const routes = [
    {
        path: '/',
        name: 'Docs',
        component: Docs
    },
    {
        path: '/doc',
        name: 'Markdown',
        component: Markdown
    }
];
export default routes;