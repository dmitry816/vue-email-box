<template>
	<div class="content-list">
		<div class="container container-fluid">
			<div class="email-list">
				<table v-if="messages.length > 0" class="table table-hover">
					<tbody>
						<tr v-for="message in messages" :key="message.id" @click="selectedMail = message">
							<td>{{message.subject}}</td>
							<td>{{message.email}}</td>
						</tr>
					</tbody>
				</table>
				<p class="empty-list" v-else>No messages yet.</p>
			</div>
		</div>
		<div class="mail-body" v-if="selectedMail">
			<hr>
			<p><strong>To: {{selectedMail.email}}</strong>
			<p><strong>{{selectedMail.subject}}</strong></p>
			<p>{{selectedMail.content}}</p>
			<button class="btn btn-default btn-position"
				@click.prevent="deleteSelectedMail">
				Delete email
			</button>
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
		},
		methods: {
			deleteSelectedMail: function() {
				this.$http.delete('http://localhost:3000/messages/'+ this.selectedMail.id)
			}
		}
	}
</script>
