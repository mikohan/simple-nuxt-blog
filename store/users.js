export const state = () => ({
    users: []
});

export const mutations = {
    setUsers(state, users) {
        state.users = users
    }
};

export const actions = {
    getFromServer(vuexContext) {
        return this.$axios.$get('https://jsonplaceholder.typicode.com/users')
            .then(data => {
                vuexContext.commit('setUsers', data);
            })
            .catch(e => console.log(e))
    }

};

export const getters = {
    usersList(state) { return state.users }
}
//https://jsonplaceholder.typicode.com/posts#