<template>
	<div class="email-list">
		<div class="email-list-header">
			<span>Subject </span>
			<span>From </span>
			<span>Date </span>
		</div>
		<div class="email-item" v-for="message in messages" :key="message.id">
			<div>{{message.subject}}} - {{message.email}} - {{message.content}}</div>
			<!-- <ul>
				<li>
					<email-list-item></email-list-item>
				</li>
			</ul> -->
		</div>
	</div>
</template>

<script>

	import EmailListItem from './EmailListItem.vue';

	export default {
		data() {
			return {
				messages: []
			}
		},
		created() {
			this.$http.get('http://localhost:3000/messages')
			.then(function(data) {
				this.messages = data.content;
			})
		},
		components: {
			'email-list-item': EmailListItem,
		},
	}

</script>
