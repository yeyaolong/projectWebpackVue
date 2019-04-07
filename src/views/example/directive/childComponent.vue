<template>
  <div class="child-component">
    <span>从父组件传过来的值：{{currentId}}</span>
  </div>
</template>

<script>
export default {
  name: 'child-component',
  data () {
    return {}
  },
  props: {
    currentId: '',
    value: ''
  }

}
</script>
