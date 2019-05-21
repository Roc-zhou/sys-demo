import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  // 在state中去声明全局变量，可以通过 this.$store.state 访问
  state: {
    name: 'roc-zhou'
  },
  // 在getters中声明state中变量的计算函数，缓存计算后的数据， 通过 this.$store.getters 调用
  getters: {

  },
  // 只能执行同步方法，不要去执行异步方法 通过 this.$store.commit 方法去调用
  mutations: {
    getUserInfo(state, val) {
      state.name = val;
    }
  },
  // 借助actions的手去 执行 mutations ， 通过  this.$store.dispatch 的方式调用
  // 可以用来执行异步操作，可以跟踪异步数据状态变化
  actions: {
    changeAvatarUrl: context => {
      // 调用 mutation
      context.commit('changeAvatarUrl', context);
    },

  }
})
