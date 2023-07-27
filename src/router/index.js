import { createRouter, createWebHistory } from "vue-router";
import home_admin from '../pages/master/admin/home_admin'
import penggalangan_dana from '../pages/master/admin/penggalangan_dana'
import informasi_bencana from '../pages/master/admin/informasi_bencana'
import login from '../pages/master/login'
import register from '../pages/master/register'
import home_user from '../pages/master/user/home_user'
import donasi_user from '../pages/master/user/donasi_user'
import tambah_artikel from '../pages/master/admin/tambah_artikel'
import edit_artikel from '../pages/master/admin/edit_artikel'
import store from '../store';


const routes = [

    {
        name: 'home_admin',
        path: '/home_admin',
        component: home_admin,
        meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
        name: 'penggalangan_dana',
        path: '/penggalangan_dana',
        component: penggalangan_dana,
        meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
        name: 'informasi_bencana',
        path: '/informasi_bencana',
        component: informasi_bencana,
        meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
        name: 'login',
        path: '/login',
        component: login
    },
    {
        name: 'register',
        path: '/register',
        component: register

    },
    {
        name: 'home_user',
        path: '/',
        component: home_user,
        meta: { requiresAuth: true }
    },
    {
        name: 'tambah_artikel',
        path: '/tambah_artikel',
        component: tambah_artikel,
        meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
        name: 'edit_artikel',
        path: '/edit_artikel/:id',
        component: edit_artikel,
        meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
        name: 'donasi_user',
        path: '/donasi_user/:id',
        component: donasi_user,
        meta: { requiresAuth: true }
    }

];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        // User is not authenticated, redirect to login
        next('/login');
    } else {
        // No authentication required, proceed with the navigation
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAdmin && store.getters.getUser.role != 'admin') {
        // User is not authenticated, redirect to login
        next('/');
    } else {
        // Continue to the requested route
        next();
    }
});