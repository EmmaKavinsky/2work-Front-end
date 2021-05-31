// Global routes
let routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home.vue')
    },
    {
        path: '/home',
        name: 'HomePage',
        component: () => import('@/pages/Home.vue')
    },
    {
        path:'/register',
        name: 'register',
        component : () => import('@/pages/Register.vue')
    },
    {
        path:'/login',
        name:'login',
        component : () => import('@/pages/Login.vue')
    },
    {
        path:'/forget-password',
        name:'forgetPassword',
        component : () => import('@/pages/Forgotpassword.vue')
    },
    {
        path:'/reset-password',
        name:'Resetpassword',
        component : () => import('@/pages/Resetpassword.vue')
    },
    {
        path:'/edit-profile',
        name:'EditProfile',
        component : () => import('@/pages/EditProfile.vue')
    },
    {
        path:'/setting-password',
        name:'SettingPassword',
        component : () => import('@/pages/SettingPassword.vue')
    },
    {
        path:'/contact',
        name:'Contact',
        component : () => import('@/pages/Contact.vue')
    },
    {
        path:'/add-annonce',
        name: 'AddAnnonce',
        component : () => import('@/pages/AddAnnonce.vue')
    },
    {
        path:'/public-profile',
        name:'PublicProfile',
        component : () => import('@/pages/PublicProfile.vue')
    },
    {
        path:'/offers-annonces',
        name:'OffersAnnonces',
        component : () => import('@/pages/OffersAnnonces.vue')
    },
    {
        path:'/update-annonce/:id',
        name:'UpdateAnnonce',
        component : () => import('@/pages/UpdateAnnonce.vue')
    },
    {
        path:'/add-demande',
        name:'AddDemande',
        component : () => import('@/pages/AddDemande.vue')
    },
    {
        path:'/demands-annonces',
        name:'AddDemande',
        component : () => import('@/pages/DemandsAnnonces.vue')
    }


];


export default routes
