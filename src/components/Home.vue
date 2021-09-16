<template>
  <div>
    <el-button type="info" @click="layout">退出</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    layout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less">

</style>
