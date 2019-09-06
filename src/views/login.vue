<template>
  <div class="login">
    <loginForm :name='name' />
  </div>
</template>
<script>
import loginForm from './../components/login/index'
export default {
  name: 'mine',
  data () {
    return {
      name: '天信云工业互联网平台'
    }
  },
  mounted () {
  },
  methods: {
  },
  components: {
    loginForm
  }
}
</script>

<style lang="scss" scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url("./../assets/img/BG.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
}
</style>
