<template>
	<div class="create-email">
		<form name="emailForm" class="create-email-form">
			<div class="bottom-padding">
				<label>From username@mail.com</label>
			</div>


			<div class="bottom-padding">
				<label>Email</label>
				<input  type="email"
						size="60"
						name="emailInput"
						class="form-control"
						v-model="message.email"
						placeholder="name@example.com"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
						required
				>
			</div>
			<div class="bottom-padding">
				<label>Subject </label>
				<input class="form-control" type="text" v-model="message.subject" required>
			</div>


			<div class="bottom-padding">
				<textarea class="form-control" v-model="message.content" rows="20" cols="90" requred></textarea>
			</div>
			<div class="button-group">
				<div @click.prevent="post" type="submit">
					<router-link to="/" class="btn btn-default btn-position">
						Send email
					</router-link>
				</div>
				<div class="second-btn">
					<router-link to="/" class="btn btn-default btn-position">
						Go back
					</router-link>
				</div>
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
				let validInput = document.forms["emailForm"]["emailInput"].value;
				if(validInput == '') {

					return false;
				}
				this.$http.post('http://localhost:3000/messages', {
					email: this.message.email,
					subject: this.message.subject,
					content: this.message.content,
				})
			}
		}
	}
</script>
