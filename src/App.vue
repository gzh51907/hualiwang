<template>
  <div>
    <div >
      <el-row :gutter="20" id="start" style="margin:0">
        <el-col :span="6" v-for="item in menus" :key="item.name">
           <router-link :to="item.path" active-class="current">
          <div class="grid-content bg-purple">
              <i :class="item.icon"></i>
              {{item.text}}
              </div>
              </router-link>
        </el-col>
      </el-row>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      menus: [
        {
          name: "home",
          path: "/home",
          text: "首页",
          icon:"el-icon-house"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车",
          icon:"el-icon-shopping-cart-full"
        },
        {
          name: "classification",
          path: "/classification",
          text: "分类",
          icon:"el-icon-s-operation"
        },
        {
          name: "my",
          path: "/my",
          text: "我的",
          icon:"el-icon-user"
        }
      ]
    };
  },
  components: {}
};
</script>

<style >
*{padding: 0;margin: 0;box-sizing: border-box}
a{text-decoration: none}
#start {
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0;
  left: 0;
  z-index: 88;
  text-align: center;
  background-color:#fff
}  .current{color:#FE846B;font-weight:bold;}
.grid-content{display: flex;flex-direction: column;}
.grid-content i{font-size: 20px}
.el-tabs__nav .el-tabs__item {padding: 0 10px;}
</style>
