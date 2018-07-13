<template>
	<div id="create-email">
		<form>
			<div class="create-email-header">
				<div class="form">
					<span>From</span>
				</div>
				<div class="email">
					<label>Email </label>
					<input type="email" v-model="message.email">
				</div>
				<div class="subject">
					<label>Subject </label>
					<input type="text" v-model="message.subject">
				</div>
			</div>
			<div>
				<textarea v-model="message.content" rows="30" cols="90"></textarea>
			</div>
			<div class="create-email-footer">
				<button v-on:click.prevent="post">Send</button>
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
					title: this.message.subject,
					body: this.message.content,
				})
				.then(function(data){

				})
			}
		}
	}
</script>
