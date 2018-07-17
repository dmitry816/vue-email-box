<template>
	<div id="create-email">
		<form class="create-email-form">
			<div class="bottom-padding">
				<label>From username@mail.com</label>
			</div>
			<div class="bottom-padding">
				<label >Email</label>
				<input class="form-control" type="email" v-model="message.email" placeholder="name@example.com">
			</div>
			<div class="bottom-padding">
				<label>Subject </label>
				<input class="form-control" type="text" v-model="message.subject">
			</div>
			<div class="bottom-padding">
				<textarea class="form-control" v-model="message.content" rows="20" cols="90" required></textarea>
			</div>
			<div>
				<button class="btn btn-default btn-pozition"
					@click.prevent="post">
					Send email
				</button>
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
			}
		}
	}
</script>
