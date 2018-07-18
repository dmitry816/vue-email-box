<template>
	<div class="create-email-form">
		<p><strong>To: {{message.email}}</strong>
		<p><strong>{{message.subject}}</strong></p>
		<p>{{message.content}}</p>
		<div @click.prevent="deleteSelectedMail">
			<router-link to="/" class="btn btn-default btn-position" >
				Delete email
			</router-link>
		</div>
		<div>
			<router-link to="/" exact class="btn btn-default btn-position">
				Go back
			</router-link>
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
		deleteSelectedMail: function() {
			this.$http.delete('http://localhost:3000/messages/'+ this.id)
		},
	}
}

</script>