import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import Router from 'vue-router';
import Routes from './routes';

Vue.use(Router);
Vue.use(VueResource);
Vue.config.productionTip = false;

const router = new Router({
	routes: Routes,
	mode: 'history',
});

new Vue({
	render: h => h(App),
	router: router
}).$mount('#app')

export const eventBus = new Vue();
