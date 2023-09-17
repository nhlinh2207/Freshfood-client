import { createStore } from "vuex";
import cart from "./cart.store";
import authen from './authen.store';
import createPersistedState from 'vuex-persistedstate';


const store = createStore({
    modules: {
        authen,
        cart   
    },
    // Dùng local storage để lưu state 
    // Khi load lại trang sẽ không bị mất dữ liệu state
    plugins: [
        createPersistedState()
    ]
});

export default store;