<template>
  <div>
    <div><header>
      <i class="el-icon-arrow-left" @click="goto()"></i>
      登录
    </header></div>
    <div style="padding-right:20px">
        <el-form :model="ruleForm" :rules="rules" ref="regForm" status-icon label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox label="下次免登陆" v-model="ruleForm.mdl"></el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" style="width:260px;height:46px">登录</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        mdl: true
      },
      rules: {
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        username: [
          { required: true, message: "亲，用户名必须填写哟", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      //   校验整个表单
      this.$refs.regForm.validate(async valid => {
        // valid： 所有校验规则都通过后，得到true，只要有一个表单元素校验不通过则得到form
        if (valid) {
          // alert('submit!');
          // 发起ajax请求，等待服务器返回结果
          // 根据服务器返回结果：注册成功->跳到“我的”

          let { username, password, mdl } = this.ruleForm;

          let { data } = await this.$axios.get(
            "http://localhost:1906/user/login",
            {
              params: {
                username,
                password,
                mdl
              }
            }
          );
          console.log("data:", data);

          // this.$router.replace('/mine')
          if (data.code === 1) {
            let { targetUrl } = this.$route.query;console.log('targetUrl:',targetUrl)

            this.$router.replace({
              path: targetUrl || "/my"
            });

            // 把token写入localstorage
            localStorage.setItem("Authorization", data.data);
            // this.$router.replace({path:'/mine',params:{username}})
          } else {
            alert("用户名或密码不正确");
          }
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  height: 48px;
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  color: #000;
  position: relative;
  border-bottom: 1px solid #ccc;
  i {
    font-size: 30px;
    position: absolute;
    top: 10px;
    left: 20px;
  }
}
</style>