<template>
	<aside class="sidebar">
		<div class="left-side">
			<div class="create-email">
				<create-email></create-email>
			</div>
			<div class="sent">
				<sent></sent>
			</div>
		</div>
		<ul class="sidebar-nav">
			<li>
				<a href="#">Compose</a>
			</li>
			<li>
				<a href="#">Sent</a>
			</li>
		</ul>
	</aside>
</template>

<script>
	// TODO rename
	import CreateEmail from './CreateEmail.vue';
	import Sent from './Sent.vue';

	export default {
		name: 'Sidebar',
		data() {
			return {

			}
		},
		components: {
			'create-email': CreateEmail,
			'sent': Sent,
		}
	}
</script>
