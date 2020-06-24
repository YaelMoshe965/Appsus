import homePage from './main-pages/home-page.cmp.js';
import keepApp from './apps/keep/pages/keep-app.cmp.js';
import bookApp from './apps/book/pages/book-app.cmp.js';

import emailApp from './apps/email/pages/email-app.cmp.js';
import emailDetails from './apps/email/pages/email-details.cmp.js'

const myRoutes = [
    {
        path: '/',
        component: homePage

    },
    {
        path: '/email',
        component: emailApp
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/email/:emailId',
        component: emailDetails
    }
]

export const myRouter = new VueRouter({ routes: myRoutes });
