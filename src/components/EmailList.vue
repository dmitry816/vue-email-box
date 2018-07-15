<template>
	<div class="email-list">
		<div class="">
			<table v-if="messages.length > 0" class="table table-hover">
				<tbody>
					<tr v-for="message in messages" :key="message.id" @click="openMessage(message)">
						<td>{{message.subject}}</td>
						<td>{{message.email}}</td>
					</tr>
				</tbody>
			</table>
			<p v-else>No messages yet.</p>
		</div>
	</div>
</template>

<script>

	import Message from './Message.vue';
	import { eventBus } from '../main';

	export default {
		name: 'EmailList',
		props: {
			messages: {
				type: Array,
				required: true
			}
		},
		created() {
			this.$http.get('http://localhost:3000/messages')
			.then(function(data) {
				this.messages = data.body;
			})
		},
		methods: {
			openMessage(message) {
				eventBus.$emit('itemSelected', {
					data: {
						message: item
					}
				});
			}
		},
		components: {
			'message': Message,
		},
	}
</script>
