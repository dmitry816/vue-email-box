<template>
	<div id="app">
		<div class="container">
			<app-email-list></app-email-list>
			<app-sidebar></app-sidebar>
		</div>
	</div>
</template>

<script>

	import EmailList from './components/EmailList.vue';
	import Sidebar from './components/Sidebar.vue';

	export default {
		name: 'app',
		components: {
			'app-email-list': EmailList,
			'app-sidebar': Sidebar,
		},
		data() {
			return {

			}
		},
		created() {

		}
	}
</script>

<!--<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #0c0c0c;
		margin-top: 60px;
		background: rgb(168, 224, 201);
		border-style: dotted 3px;
		border: 6px
	}
</style>
-->