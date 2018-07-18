<template>
	<div class="content-list">
		<div class="container container-fluid">
			<div class="email-list">
				<table v-if="messages.length > 0" class="table table-hover">
					<tbody>
						<tr v-for="message in messages" :key="message.id">
							<router-link v-bind:to="'/email/' + message.id">
								<td>{{message.subject}}</td>
								<td>{{message.email}}</td>
							</router-link>
						</tr>
					</tbody>
				</table>
				<p class="empty-list" v-else>No messages yet.</p>
			</div>
		</div>
		</div>
</template>

<script>

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
		}
	}
</script>
