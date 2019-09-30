<template>
  <div>
    <div class="start">
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in menus" :key="item.name">
           <router-link :to="item.path" active-class="current">
          <div class="grid-content bg-purple">
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
          text: "首页"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车"
        },
        {
          name: "classification",
          path: "/classification",
          text: "分类"
        },
        {
          name: "my",
          path: "/my",
          text: "我的"
        }
      ]
    };
  },
  components: {}
};
</script>

<style >
a{text-decoration: none}
.start {
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0;
  left: 0;
  z-index: 99;
  text-align: center;
}  .current{color:#f00;font-weight:bold;}
</style>
