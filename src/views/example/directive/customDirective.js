// https://cn.vuejs.org/v2/guide/custom-directive.html#ad
export default {
  bind (el, {name, value, oldVale, expression, arg, modifiers}, vnode, oldVnode) {
    // console.log('指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置')
    if (value && typeof value === 'function') {
      // 请参考vux, clickoutside 指令的写法
      el.addEventListener('click', value, true)
    }
  },
  inserted () {
    // console.log('被绑定元素插入父节点时调用,被绑定元素插入父节点调用(仅保证父节点存在，但不一定已被插入文档中)')
  },

  update () {
    // console.log('所在组件的VNode更新时调用，但是可能发生在其子VNode更新之前。')
  },

  componentUpdated () {
    // console.log('指令所在组件的VNode及其子VNode全部更新后调用')
  },

  unbind () {
    // console.log('只调用一次，指令和元素解绑时调用')
  }
}
