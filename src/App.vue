<template>
	<div class="container mail-container">
		<div class="sidebar">
			<app-sidebar></app-sidebar>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>

	import Email from './components/Email.vue';
	import EmailList from './components/EmailList.vue';
	import CreateEmail from './components/CreateEmail.vue';
	import Sidebar from './components/Sidebar.vue';

	export default {
		data() {
			return {
				component: 'app-email-list',
			}
		},
		components: {
			'app-create-email': CreateEmail,
			'app-email-list': EmailList,
			'app-email': Email,
			'app-sidebar': Sidebar,
		}
	}
</script>
