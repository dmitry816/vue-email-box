<template>
	<div id="create-email">
		<form id="email-form">
			<div class="create-email-header">
				<div class="form">
					<label>From: username@mail.com</label>
				</div>
				<div class="email">
					<label>Email </label>
					<input type="email" v-model="message.email" required>
				</div>
				<div class="subject">
					<label>Subject </label>
					<input type="text" v-model="message.subject">
				</div>
			</div>
			<div id="textarea">
				<textarea v-model="message.content" rows="30" cols="90" required></textarea>
			</div>
			<div class="create-email-footer">
				<button class="btn btn-default" v-on:click.prevent="post">Send</button>
			</div>
		</form>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				message: {
					email: '',
					subject: '',
					content: ''
				}
			};
		},
		methods: {
			post: function() {
				this.$http.post('http://localhost:3000/messages', {
					email: this.message.email,
					subject: this.message.subject,
					content: this.message.content,
				})
				.then(function(data){
				})
			}
		}
	}
</script>
