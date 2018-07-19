<template>
	<div class="create-email-form">
		<p><strong>To: {{message.email}}</strong>
		<p><strong>{{message.subject}}</strong></p>
		<p>{{message.content}}</p>
		<div class="button-group">
			<button @click.prevent="deleteSelectedMail" class="btn btn-default btn-position">
				Delete email
			</button>
			<div class="second-btn">
				<router-link to="/" exact class="btn btn-default btn-position">
					Go back
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return{
			id: this.$route.params.id,
			message: {
				type: Object,
				required: true,
			}
		}
	},
	created() {
		this.$http.get('http://localhost:3000/messages/'+ this.id)
		.then(function(data) {
			this.message = data.body;
		})
	},
	methods: {
		deleteSelectedMail: async function() {
			await this.$http.delete('http://localhost:3000/messages/'+ this.id);
			this.$router.push({path: '/'});
		},
	}
}

</script>