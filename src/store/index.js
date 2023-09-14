import { createStore } from "vuex";
import cart from "./cart.store";
import authen from './authen.store'
import search from './search.store'

const store = createStore({
    modules: {
        authen,
        cart,
        search    
    },
});

export default store;