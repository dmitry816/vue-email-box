<template>
	<div class="container">
		<div >
			<div>
				<div>
					<button type="button" class="btn btn-default" @click="component = 'app-create-email'">create</button>
				</div>
				<div>
					<button type="button" class="btn btn-default" @click="component = 'app-email-list'">sent</button>
				</div>
			</div>
			<div >
				<keep-alive>
					<component :is="component"></component>
				</keep-alive>
			</div>
		</div>
	</div>
</template>

<script>

	import EmailList from './components/EmailList.vue';
	import CreateEmail from './components/CreateEmail.vue';
	import Message from './components/Message.vue';
	import { eventBus } from './main';

	export default {
		data() {
			return {
				component: 'app-email-list',
			}
		},
		components: {
			'app-create-email': CreateEmail,
			'app-email-list': EmailList,
			'app-message': Message,
		},
	}
</script>
