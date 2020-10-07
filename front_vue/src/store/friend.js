import {
    apiHandler
} from "./../api/handler";
const handler = apiHandler();


export default {
    namespaced: true,
    state: {
        friends: []
    },
    getters: {
        all(state) {
            return state.friends;
        },
    },
    mutations: {
        pushFriend(state, friend) {
            state.friends.push(friend);
        },
        setFriends(state, friends) {
            state.friends = [...friends]
        }
    },
    actions: {
        addFriend(context, friendInfos) {
                return new Promise((resolve, reject) =>{
                    handler
                    .patch(`/users/${friendInfos._id}`, friendInfos)
                    .then(res => {
                        context.commit("pushFriend", res.data); // on modifie le store user avec la liste de tous les users retournés par backend
                        resolve(res); // promesse tenue !
                      })
                      .catch(err => {
                        reject(err); // promesse non tenue !
                      });
                })
        },
        getFriends(context) {
                return new Promise((resolve, reject) => {
                 handler
                    .get("/users/")
                    .then(res => {
                      context.commit("setFriends", res.data); // on modifie le store user avec la liste de tous les users retournés par backend
                      resolve(res); // promesse tenue !
                    })
                    .catch(err => {
                      reject(err); // promesse non tenue !
                    });
                });
        },
        deleteFriend(context, friendId) {
            return new Promise((resolve, reject) =>{
                handler
                .patch(`/users/${friendId._id}`, friendId)
                .then(res => {
                    context.commit("setFriends", res.data); // on modifie le store user avec la liste de tous les users retournés par backend
                    resolve(res); // promesse tenue !
                  })
                  .catch(err => {
                    reject(err); // promesse non tenue !
                  });
            })
        }
    },
}