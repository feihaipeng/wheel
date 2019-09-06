<template>
  <div class="login_form">
    <div class="login_form_input">
      <ul>
        <li>
          <p>{{ name }}</p>
        </li>
        <li>
          <el-input
            v-model="userName"
            placeholder="请输用户名">
          </el-input>
        </li>
        <li>
          <el-input
            v-model="password"
            :type='passwordType'
            placeholder="请输入密码">
          </el-input>
          <i class="el-icon-view" @mousedown="click_on" @mouseup="click_up"></i>
        </li>
        <li>
          <el-button class="login_button" type="primary">登录</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  props: [ 'name' ],
  data () {
    return {
      userName: '',
      password: '',
      passwordType: 'password'
    }
  },
  methods: {
    click_on () {
      this.passwordType = 'input'
    },
    click_up () {
      this.passwordType = 'password'
    }
  }
}
</script>
<style lang="scss" scoped>
.login_form {
  width: 500px;
  height: 350px;
  position: absolute;
  top: 50%;
  margin-top: -150px;
  right: 100px;
  background: rgba(0, 0, 0, 0.1);
  .login_form_input {
    width: 80%;
    margin: 20px auto;
    ul li {
      display: flex;
      margin-top: 20px;
      @include font_color($font-color-theme);
      p {
        font-family: PingFangSC-Semibold;
        font-size: 38px;
        letter-spacing: 1.81px;
        text-align: center;
        text-align: center;
        width: 100%;
        margin: 20px 0;
      }
      span {
        font-family: PingFangSC-Semibold;
        width: 120px;
        font-size: 18px;
        line-height: 40px;
        text-align: right;
      }
      i {
        font-size: 18px;
        line-height: 40px;
        right: 12%;
        position: absolute;
        cursor: pointer;
      }
      .login_button {
        width: 100%;
        margin-top: 20p;
      }
    }
  }
}
</style>
