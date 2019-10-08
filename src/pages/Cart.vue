<template>
  <div>
    <header>
      <i class="el-icon-arrow-left" @click="goOff()"></i>
      购物车
    </header>
    <div class="page-cart">
      <el-row
        v-for="item in datalist"
        :key="item.id"
        style="margin-top:10px;border-bottom:1px solid #ccc;padding:10px 0;"
      >
        <el-col :span="8" style="display:flex">
          <el-checkbox v-model="checked" size="medium" style="margin-right:10px;margin-top:30px;"></el-checkbox>
          <img :src="item.imgurl" />
        </el-col>
        <el-col :span="13">
          <h4>{{item.name}}</h4>
          <p class="price">
            <span>{{item.price}}</span> &times;
            <el-input-number size="mini" v-model="item.qty"></el-input-number>
          </p>
        </el-col>
        <el-col :span="3" style="text-align:right">
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            size="mini"
            style="margin-top:10px;"
          ></el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" style="text-align:right;margin-top:20px;">
          <el-button type="danger" icon="el-icon-delete" size="mini">清空购物车</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="jiesuan">
      <el-col :span="12" class="price" style>
        总计：
        <span>￥ {{totalPrice.toFixed(2)}}</span>
      </el-col>
      <el-col :span="12" style="text-align:right">
        <el-button type="danger" icon="el-icon-shopping-bag-1">去结算</el-button>
      </el-col>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
      datalist: [
        {
          id: "1",
          name: "送恋人鲜花",
          imgurl:
            require("../imgs/m_category_flowers_occ_Love.png"),
          price: 198,
          qty: 10
        },
        {
          id: "2",
          name: "生日鲜花",
          imgurl:
            require("../imgs/m_category_flowers_occ_Birthday.png"),
          price: 299,
          qty: 2
        },
        {
          id: "3",
          name: "巧罗巧克力",
          imgurl:
            require("../imgs/m_category_hot_Chocolate_qiaoluo.png"),
          price: 399,
          qty: 1
        }
      ]
    };
  },
  computed: {
    totalPrice() {
      // let total = 0;
      // this.datalist.forEach(item=>{
      // total += item.price*item.qty;
      // })
      // return total;

      return this.datalist.reduce((pre, item) => {
        // pre ： 前一次的返回值（第一次为初始值）
        return pre + item.price * item.qty;
      }, 0);
    }
  },
  methods: {
    goOff() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.page-cart {
  padding: 10px;
  box-sizing: border-box;

  img {
    width: 84px;
    height: 84px;
  }
}
.jiesuan {
  width: 100%;
  height: 51px;
  border-top: 1px solid #ccc;
  padding: 0 10px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  span {
    color: red;
  }
}
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