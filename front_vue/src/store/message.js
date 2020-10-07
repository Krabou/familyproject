import { apiHandler} from "./../api/handler";
const handler = apiHandler();


export default {
    namespaced: true,
    state: {
        receivedMessages: [],
        sentMessages: [],
    },
    getters: {
        sentMessages(state) {
            return state.sentMessages;
        },
        receivedMessages(state) {
            return state.receivedMessages;
        },
    },
    mutations: {
        setSentMessages(state, messages) {
            state.sentMessages = [...messages]
        },
        setReceivedMessages(state, messages) {
            state.receivedMessages = [...messages]
        },
        pushSentMessage(state, message) {
            console.log("pusha t", message,  state.sentMessages);
            state.sentMessages.push(message)
        },
        pushReceivedMessage(state, message) {
            state.receivedMessages.push(message)
        }
    },
    actions: {
        async getReceivedMessages(context, userId) {
            try {
                const res = await handler.get(`/messages/receiver/${userId}`);
                context.commit("setReceivedMessages", res.data);
            } catch (err) {
                console.error(err)
            }
        },
        async getSentMessages(context, userId) {
            try {
                const res = await handler.get(`/messages/sender/${userId}`);
                context.commit("setSentMessages", res.data);
            } catch (err) {
                console.error(err)
            }
        },
        send(context, message) {
            return new Promise((resolve, reject) => {
                handler
                    .post(`/messages/`, message)
                    .then(res => {
                        context.commit("pushSentMessage", res.data); // on modifie le store user avec la liste de tous les users retournés par backend
                        resolve(res); // promesse tenue !
                    })
                    .catch(err => {
                        reject(err); // promesse non tenue !
                    });
            })
        },
    },
}