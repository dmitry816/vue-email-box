import Email from './components/Email.vue';
import EmailList from './components/EmailList.vue';
import CreateEmail from './components/CreateEmail.vue';


export default [
	{
		path: '/',
		component: EmailList,
	},
	{
		path: '/email/:id',
		component: Email,
	},
	{
		path: '/compose',
		component: CreateEmail,
	}
]
