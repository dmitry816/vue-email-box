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
				>
			</div>
			<div class="bottom-padding">
				<label>Subject </label>
				<input class="form-control" type="text" v-model="message.subject" required>
			</div>
			<div class="bottom-padding">
				<textarea class="form-control" v-model="message.content" rows="20" cols="90"></textarea>
			</div>
			<div class="button-group">
				<button class="btn btn-default btn-position" @click.prevent="post">
					Send email
				</button>
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
			post: async function() {
				if(!this.message.email) {
					return false;
				}
				await this.$http.post('http://localhost:3000/messages', {
					email: this.message.email,
					subject: this.message.subject,
					content: this.message.content,
				})
				this.$router.push({path: '/'});
			}
		}
	}
</script>
