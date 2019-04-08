<template>
  <div class="child-component3">
    <slot name="myHeader"></slot>
    <slot name="myBody"></slot>
    <slot name="myFooter" ></slot>
  </div>
</template>


<script>
export default {
  name: 'child-component3',
  data () {
    return {}
  },
  method: {}
}
</script>
