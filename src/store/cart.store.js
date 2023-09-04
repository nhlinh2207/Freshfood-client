import {toastSuccess, toastError} from '@/plugins/toastify.js'

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';
const UPDATE_CART = 'UPDATE_CART';

const state = {
    data: []
}

const getters = {
    cartList: state => {
        return state.data
    },

    priceTotal: state => {
        return state.data.reduce( ( acc, cur ) => {
            return acc + cur.sum
        }, 0 );
    },

    qtyTotal: state => {
        return state.data.reduce( ( acc, cur ) => {
            return acc + parseInt( cur.qty, 10 );
        }, 0 );
    },

    isInCart: state => ( product ) => {
        return state.data.find( item => item.id == product.id ) ? true : false;
    },

    canAddToCart: state => ( product, qty = 1 ) => {
        var find = state.data.find( item => item.id == product.id );
        if ( find ) {
            if ( product.stock == 0 || ( product.stock < ( find.qty + qty ) ) ) return false;
            else return true;
        } else {
            if ( product.stock == 0 || ( product.stock < qty ) ) return false;
            else return true;
        }
    }
}

const actions = {
    addToCart: function ( { commit, getters }, payload ) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        if ( !getters.canAddToCart( payload.product, payload.qty ) ) {
            toastError({
                msg: "Quá số lượng cho phép của sản phẩm",
                duration: 1500
            })
            return;
        }

        commit( ADD_TO_CART, payload );
        toastSuccess({
            msg: "Thành công",
            duration: 1500
        })
    },

    removeFromCart: function ( { commit }, payload ) {
        commit( REMOVE_FROM_CART, payload );
        toastSuccess({
            msg: "Đã xóa sản phẩm khỏi giỏ hảng",
            duration: 1500
        })
    },

    updateCart: function ( { commit }, payload ) {
        commit( UPDATE_CART, payload );
        toastSuccess({
            msg: "Cập nhật giỏ hàng thành công",
            duration: 1500
        })
    }
}

const mutations = {
    [ADD_TO_CART] ( state, payload ) {
        var findIndex = state.data.findIndex( item => item.id == payload.product.id );
        let qty = payload.qty ? payload.qty : 1;
        if ( findIndex !== -1 ) {
            state.data = state.data.reduce( ( acc, product, index ) => {
                if ( findIndex == index ) {
                    acc.push( {
                        ...product,
                        qty: product.qty + qty,
                        sum: ( payload.product.sale_price ? payload.product.sale_price : payload.product.price ) * ( product.qty + qty )
                    } );
                } else {
                    acc.push( product );
                }
                return acc;
            }, [] );
        } else {
            state.data = [
                ...state.data,
                {
                    ...payload.product,
                    qty: qty,
                    price: payload.product.sale_price ? payload.product.sale_price : payload.product.price,
                    sum: qty * ( payload.product.sale_price ? payload.product.sale_price : payload.product.price )
                }
            ];
        }
    },

    [ REMOVE_FROM_CART ] ( state, payload ) {
        state.data = state.data.filter( item => {
            if ( item.id !== payload.product.id ) return true;
            if ( item.name !== payload.product.name ) return true;
            return false;
        });
    },

    [ UPDATE_CART ] ( state, payload ) {
        let qty = payload.qty ? payload.qty : 1;
        state.data = payload.cartItems.reduce( ( acc, cur ) => {
            return [
                ...acc,
                {
                    ...cur,
                    qty: qty,
                    price: payload.product.sale_price ? payload.product.sale_price : payload.product.price,
                    sum: ( cur.sale_price ? cur.sale_price : cur.price ) * cur.qty
                }
            ]
        }, []);
    },

    [ CLEAR_CART ] ( state ) {
        state.data = [];
    }
}

export default {
    namespaced: "cart",
    state,
    mutations,
    actions,
    getters,
}