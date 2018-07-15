<template>
	<div class="sidebar">
		<div>
			<button class="btn btn-compose">
				<a href="#" @click="createEmail('create-email')">Создать</a>
			</button>
		</div>
		<div>
			<button class="btn btn-sent">
				<a href="#" @click="showList('email-list')">Отправленные</a>
			</button>
		</div>
	</div>
</template>

<script>

	import CreateEmail from './CreateEmail.vue';
	import EmailList from './EmailList.vue';
	import { eventBus } from '../main';

	export default {
		name: 'Sidebar',
		data() {
			return {

			}
		},
		computed: {
			createEmail: function(component) {
				eventBus.$emit('createEmail', {
					component: CreateEmail
				})
			},
			showList: function(component) {
				eventBus.$emit('showSentList', {
					component: EmailList
				})
			}
		},
		components: {
			'create-email': CreateEmail,
			'email-list': EmailList
		}
	}
</script>
