<template>
	<div class="mail">
		<div>To: {{data.message.email}}</div>
		{{console.log(data)}}
		<div>Subject: {{data.message.subject}}</div>
		<hr>
		<div>{{data}}</div>
	</div>
</template>

<script>

	import { eventBus } from '../main';

	export default {
		name: 'Message',
		props: {
			data: {
				type: Object,
				requered: true
			},
		}
	}
</script>
