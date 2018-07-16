<template>
	<div class="">
		<div>
			<table v-if="messages.length > 0" class="table table-hover">
				<tbody>
					<th>subject</th>
					<th>email</th>
					<tr v-for="message in messages" :key="message.id" v-on:click="selectedMail = message">
						<td>{{message.subject}}</td>
						<td>{{message.email}}</td>
					</tr>
				</tbody>
			</table>
			<!-- <p v-else >No messages yet.</p> -->
		</div>

		<div v-if="selectedMail">
			<h4><strong>mail body</strong></h4>
			<p>{{selectedMail.content}}</p>
		</div>
	</div>
</template>

<script>

	import Message from './Message.vue';
	import { eventBus } from '../main';

	export default {
		data() {
			return {
				messages: {
					type: Array,
					required: true
				},
				selectedMail: null
			}
		},
		created() {
			this.$http.get('http://localhost:3000/messages')
			.then(function(data) {
				this.messages = data.body;
			})
		},
	}
</script>
