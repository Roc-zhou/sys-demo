<template>
  <div class="login" @keydown.enter="handleSubmit">
    <img src="../assets/public/image/login-bg.jpg" alt>
    <div class="login-con">
      <Card :bordered="false">
        <p slot="title">
          <Icon type="log-in"></Icon>欢迎登录
        </p>
        <div class="form-con">
          <Form ref="loginForm" :model="form" :rules="rules">
            <FormItem prop="userName">
              <Input v-model="form.userName" placeholder="请输入用户名">
                <span slot="prepend">
                  <Icon type="ios-contact" :size="16" />
                </span>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="form.password" placeholder="请输入密码">
                <span slot="prepend">
                  <Icon type="ios-lock" :size="16"/>
                </span>
              </Input>
            </FormItem>
            <FormItem>
              <Button type="primary" :loading="loading" @click="handleSubmit" long>
                <span v-if="!loading">登录</span>
                <span v-else>Loading...</span>
              </Button>
            </FormItem>
          </Form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {});
  },
  name: "login",
  data() {
    return {
      single: true,
      loading: false,
      form: {
        userName: "admin",
        password: ""
      },
      rules: {
        userName: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  created() {
    // this.getData();
  },
  methods: {
    async getData() {
      // await
      this.$api("/app/getList", {
        pageSize: 10,
        pageNum: 1
      }).then(r => {
        console.log(r);
      })
    },
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$Loading.start();
          setTimeout(() => {
            this.$Loading.finish();
            this.$goto('/main')
          }, 2000);
          
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 100vh;
  background-position: center;
  position: relative;
  overflow: hidden;
}
.login img {
  width: 100%;
  height: 100%;
}
.login .login-con {
  position: absolute;
  right: 160px;
  top: 50%;
  transform: translateY(-60%);
  width: 300px;
}
.form-con {
  padding: 10px 0 0;
}
.login-tip {
  font-size: 10px;
  text-align: center;
  color: #c3c3c3;
}
</style>
