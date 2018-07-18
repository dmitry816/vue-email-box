<template>
	<div class="create-email">
		<form name="emailForm" class="create-email-form">
			<div class="bottom-padding">
				<label>From username@mail.com</label>
			</div>
			<div class="bottom-padding">
				<label>Email</label>
				<input id="emailInput" class="form-control" type="email" v-model="message.email" placeholder="name@example.com" required>
			</div>
			<div class="bottom-padding">
				<label>Subject </label>
				<input class="form-control" type="text" v-model="message.subject">
			</div>
			<div class="bottom-padding">
				<textarea class="form-control" v-model="message.content" rows="20" cols="90"></textarea>
			</div>
			<div  @click.prevent="post">
				<router-link to="/" class="btn btn-default btn-position">
					Send email
				</router-link>
			</div>
			<router-link to="/" class="btn btn-default btn-position">
				Go back
			</router-link>
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
			},
			validateForm: function() {
				if(document.querySelector("emailInput").value.length == '') {
					console.log('empty')
				}
			}
		}
	}
</script>
