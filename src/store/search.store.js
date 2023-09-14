const SEARCH_PRODUCT = 'SEARCH_PRODUCT';

const state = {
    text: ''
}

const getters = {
    searchText: state => {
        return state.text
    }
}

const actions = {
    setSearchText: function ( { commit }, payload ) {
        commit( SEARCH_PRODUCT, payload );
    },
}

const mutations = {
    [SEARCH_PRODUCT] ( state, payload ) {
        state.text = payload.searchText
        console.log("text: "+state.text)
    }
}

export default {
    namespaced: "search",
    state,
    mutations,
    actions,
    getters,
}