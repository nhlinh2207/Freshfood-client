import {
    getLocalStorage,
    removeLocalStorage,
    setLocalStorage,
} from "@/plugins/helpers";
import { RoleType } from "@/plugins/constant";
import store from "@/store";

function getUserStr() {
    return getLocalStorage(process.env.VUE_APP_USER) || "{}";
}

function getTokenStr() {
    return getLocalStorage(process.env.VUE_APP_ACCESS_TOKEN) || null;
}

function getRoleStr() {  
    var role = getLocalStorage(process.env.VUE_APP_ROLE);
    if (role) {
      return role;
    }else{
        return RoleType.USER;
    }
  }

const state = {
    user: getUserStr(),
    token: getTokenStr(),
    role: getRoleStr()
}

const getters = {
    getUser(state) {
      return JSON.parse(state.user);
    },
    getToken(state) {
      return state.token;
    },
    getRole(state) {
      return JSON.parse(state.role);
    },
    isUser(state) {
      return state.role != RoleType.ADMIN;
    },
    isAdmin(state) {
      return state.role == RoleType.ADMIN;
    },
    isStaff(state) {
        return state.role == RoleType.STAFF;
    }
  };

const mutations = {
    SET_USER(state, payload) {
        var strUserObj = JSON.stringify(payload);
        setLocalStorage(process.env.VUE_APP_USER, strUserObj);
        state.user = strUserObj;
        // set role = first role
        var { role } = payload;
        if (role == RoleType.ADMIN) {
          store.commit("authen/SET_ROLE", RoleType.ADMIN);
        }else if (role == RoleType.STAFF) {
          store.commit("authen/SET_ROLE", RoleType.STAFF);
        }else{
          store.commit("authen/SET_ROLE", RoleType.USER);
        }
    },

    SET_TOKEN(state, payload) {
       setLocalStorage(process.env.VUE_APP_ACCESS_TOKEN, payload);
       state.token = payload;
    },
    
    SET_ROLE(state, payload) {
        setLocalStorage(process.env.VUE_APP_ROLE, payload);
        state.role = payload;
    },

    LOGOUT(state) {
        state.user = "{}";
        state.token = null;
        removeLocalStorage(process.env.VUE_APP_USER);
        removeLocalStorage(process.env.VUE_APP_ACCESS_TOKEN);
        removeLocalStorage(process.env.VUE_APP_ROLE);
    },
}

export default {
    namespaced: "authen",
    state,
    mutations,
    getters,
}