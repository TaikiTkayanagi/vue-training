import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// Example routes, adjust as needed
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Top',
        component: () => {
            return import('@/views/VueTop.vue')
        },
    },
    {
        path: '/memberList',
        name: 'addMember',
        component: () => {
            return import('@/views/AddMember.vue')
        },
    },
    {
        path: '/memberList',
        name: 'memberList',
        component: () => {
            return import('@/views/MemberList.vue')
        },
    },
    {
        path: '/memberList/detail/:id',
        name: 'detail',
        component: () => {
            return import('@/views/MemberDetail.vue')
        },
        props: (routes) => {
            const id = Number(routes.params.id);
            return {
                id: id
            }
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;