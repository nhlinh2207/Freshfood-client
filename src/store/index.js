import { createStore } from "vuex";
import cart from "./cart.store";
import authen from './authen.store'

const store = createStore({
    modules: {
        authen,
        cart    
    },
});

export default store;