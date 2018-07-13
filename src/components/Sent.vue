<template>
    <div>
        <!-- <ul v-if="messages.length > 0">
           <li v-for="(message, subject, date) in messages" :key="message.index">
               {{message.messages}},{{subject}},{{date}}
            </li>
        </ul>
        <p v-else>no sent messages</p> -->
        <div id="sent-email-list">
            <div class="sent-email-list-item" v-for="message in messages" :key="message.id">
                <div>{{message.content}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sent',
    data() {
        return {
           messages:[]
        }
    },
    components: {

    },
    created() {
        this.$http.get('http://localhost:3000/messages').then(function(data) {
            this.messages = data.content;
        })
    }
}
</script>
