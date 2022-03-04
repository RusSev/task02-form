require('./bootstrap');
require('../sass/app.scss');

import Vue from 'vue';

window.Vue = require('vue');

Vue.component('comment-form', require('./components/CommentForm.vue').default);

// router
import router from './routes.js';
window.router = router;
window.Fire = new Vue();

const app = new Vue({
    el: '#app',
    router,
}).$mount('#app');