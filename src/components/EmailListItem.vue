<template>
	<div>
		<table>
			<tr>{{message.subject}}}, {{message.email}}, {{message.content}}</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'EmailListItem',
	}
</script>