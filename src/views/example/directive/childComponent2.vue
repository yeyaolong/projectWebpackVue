<template>
  <div class="child-component2">
    <input @input="handleInput">
  </div>

</template>

<script>
export default {
  name: 'child-component2',
  data () {
    return {
      childComponent2Value: ''
    }
  },
  props: {
    value: ''
  },
  methods: {
    handleInput (event) {
      let value = event.target.value
      this.$emit('input', value)
    }
  },
  mounted () {
    console.log('child-component2组件 value', this.value)
  }
}
</script>
