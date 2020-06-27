import homePage from './main-pages/home-page.cmp.js';
import bookApp from './apps/book/pages/book-app.cmp.js';

import emailApp from './apps/email/pages/email-app.cmp.js';
import emailList from './apps/email/pages/email-list.cmp.js';
import emailDetails from './apps/email/cmps/email-details.cmp.js';

const myRoutes = [
    {
        path: '/',
        component: homePage

    },
    {
        path: '/email',
        component: emailApp,
        children: [
            {
                path: '',
                component: emailList
            },
            {
                path: '/email/:emailId',
                component: emailDetails
            }
        ]
    },
    {
        path: '/book',
        component: bookApp
    }
]

export const myRouter = new VueRouter({ routes: myRoutes });
