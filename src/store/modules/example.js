/**
 * 举例 vuex modules
 * @author：huhl 
 * @createTime：20180410 12:20
 */
const example = {
  state: {
    // loading切换状态
    isLoading: false,

    // 登录状态
    login:{
      logined:false,
      loginName:""
    }
  },

  // mutation是必须的, state的值, 只能通过mutation来改变
  // mutations 约定：大写 + 
  mutations: {
    // 切换登录的状态
    UPDATA_LOGINSTATUS(state, flag) {
      state.login.logined = flag
    },
    // 切换登录名的状态
    UPDATA_LOGINNAMESTATUS(state, flag) {
      state.login.loginName = flag
    },
    // 清涂登录信息
    CLEAR_LOGINSTATUS(){
      state.login.loginName = null;
      state.login.logined = false;
    },
    // 修改loading状态
    UPDATA_LOADINGSTATUS(state, flag) {
      state.isLoading = flag
    }
  },

  // Action 类似于 mutation，不同在于：
  // Action 提交的是 mutation，而不是直接变更状态
  // Action 可以包含任意异步操作
  actions: {
    // 修改用户名
    ChangeLoginNameStatus({ commit }, flag) {
      commit("UPDATA_LOGINNAMESTATUS", flag);
    },
    // 切换登录的状态
    ChangeLoginStatus({ commit }, flag) {
      commit("UPDATA_LOGINSTATUS", flag);
    },
    // 修改loading状态
    ChangeLoading({ commit }, flag) {
      commit("UPDATA_LOADINGSTATUS", flag);
    }
  }
}

export default example