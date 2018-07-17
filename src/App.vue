<template>
	<div class="container mail-container">
		<aside class="sidebar">
			<div class="btn-position">
				<a href="#" type="button" class="btn btn-default btn-position"
					@click="component = 'app-create-email'">
					Create
				</a>
			</div>
			<div class="btn-position">
				<a href="#" type="button" class="btn btn-default btn-position"
					@click="component = 'app-email-list'">
					Sent
				</a>
			</div>
		</aside>
		<div class="">
			<keep-alive>
				<component :is="component"></component>
			</keep-alive>
		</div>
	</div>
</template>

<script>

	import EmailList from './components/EmailList.vue';
	import CreateEmail from './components/CreateEmail.vue';

	export default {
		data() {
			return {
				component: 'app-email-list',
			}
		},
		components: {
			'app-create-email': CreateEmail,
			'app-email-list': EmailList,
		},
	}
</script>
