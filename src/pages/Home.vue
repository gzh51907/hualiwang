<template>
  <div id="app">
    <el-row :gutter="24" class="el-1" style="margin:0;">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <i class="el-icon-s-operation" @click="goto()"></i>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <img src="../assets/m_hualogo.png" alt />
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <i class="el-icon-service"></i>
        </div>
      </el-col>
    </el-row>
    <div class="block">
      <el-carousel trigger="click" height="150px" class="carousel">
        <el-carousel-item v-for="item in tp" :key="item">
          <img :src="item" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content">
      <el-row :gutter="20" style="margin: 0;">
        <el-col :span="6" style="padding:0">
              <i class="el-icon-success"></i>
              <span>认证龙头企业</span>
        </el-col>
        <el-col :span="5" style="padding:0">
            <i class="el-icon-success"></i>14年品牌
        </el-col>
        <el-col :span="5" style="padding:0">
            <i class="el-icon-success"></i>3小时送花
        </el-col>
        <el-col :span="8" style="padding:0">
            <i class="el-icon-success"></i>最近334462条好评
        </el-col>
      </el-row>
      <div class="list">
        <ul class="ul" style="display:flex;justify-content: space-around;align-items: center">
          <li v-for="item in xiao" :key="item.text" style="text-align:center"><img :src="item.img" style="display:block;width:36px;height:36px"><p>{{item.text}}</p></li>
        </ul>
      </div>
      <div class="xuan" style="font-size:16px;padding-left:10px"><b>|</b> 一秒选花</div>
      <div class="scene-item">
        <ul style="display:flex;justify-content: space-around;">
          <li  v-for="item in zhong" :key="item.txt" style="position: relative;">
            <img :src="item.imgurl" style="width:117px;height:130px">
            <span class="span1">{{item.txt}}</span>
          </li>
        </ul>
        <ul style="display:flex;justify-content: space-around;">
          <li v-for="item in dtp" :key="item.tet" style="position: relative;"><img :src="item.img" style="width:86px;height:94px"><span class="span2">{{item.tet}}</span></li>
        </ul>
        <ul style="display:flex;justify-content: space-around;">
          <li v-for="item in xtp" :key="item.text" style="position:relative;"><img :src="item.img" style="width:181px;height:160px;border:1px solid #ccc"><p class="p1">{{item.text}}</p><p class="p2">{{item.tet}}</p></li>
        </ul>
        <ul style="display:flex;justify-content: space-around;">
          <li v-for="item in atp" :key="item.text" style="position:relative;"><img :src="item.img" style="width:117px;height:130px;"><p class="p3">{{item.text}}</p></li>
        </ul>
      </div>
      <div style="height:10px;background-color:#ccc"></div>
      <div class="dibu">
        <p style="text-align:center;font-size: 18px;">送恋人/爱情鲜花</p>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tp: [
        require("../assets/17_banner_tc_m.jpg"),
        require("../assets/18_birthday_m.jpg"),
        require("../assets/18_youflower_m.jpg"),
        require("../assets/19_chongyangjie_m.jpg")
      ],
      xiao:[{
        img:require("../assets/m_home_category_flower.png"),
        text:"鲜花"
      },{
        img:require("../assets/m_home_category_ppf.png"),
        text:"永生花"
      },{
        img:require("../assets/m_home_category_cake.png"),
        text:"蛋糕"
      },{
        img:require("../assets/m_home_category_gift.png"),
        text:"礼品"
      },{
        img:require("../assets/m_home_category_chocolate.png"),
        text:"巧克力"
      }],
      zhong:[{
        imgurl:require("../assets/m_home_use_lover.png"),
        txt:"送恋人"
      },{
        imgurl:require("../assets/m_home_use_elder.png"),
        txt:"送长辈"
      },{
        imgurl:require("../assets/m_home_use_friends.png"),
        txt:"送朋友"
      }],
      dtp:[{
        img:require("../assets/m_home_use_birthday.png"),
        tet:"生日祝福"
      },{
        img:require("../assets/m_home_use_profess.png"),
        tet:"表白求婚"
      },{
        img:require("../assets/m_home_use_business.png"),
        tet:"开业商务"
      },{
        img:require("../assets/m_home_use_anniversary.png"),
        tet:"周年纪念"
      }],
      xtp:[{
        img:require("../assets/m_home_ranklist.png"),
        text:"热销榜",
        tet:"集万千宠爱"
      },{
        img:require("../assets/m_home_special.png"),
        text:"特价专区",
        tet:"超值好货"
      }],
      atp:[{
        img:require("../assets/m_home_category_new.png"),
        text:"新品来袭"
      },{
        img:require("../assets/m_home_category_quality.png"),
        text:"品味之选"
      },{
        img:require("../assets/m_home_category_you.png"),
        text:"设计师臻选"
      }]
    };
  },
  methods:{
    goto(){
      this.$router.push('/classification')
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0; 
}
ul,li{list-style: none}
.el-1 {
  text-align: center;
  height: 48px;
  width: 100%;
  background: #435448;
  display: flex;
  align-items: center;
}
.el-1 img {
  width: 180px;
  margin: 0 auto;
  display: inline-block;
}
.el-icon-s-operation,
.el-icon-service {
  font-size: 25px;
  color: #fff;
}
.carousel img {
  width: 100%;
}
.content {
  width: 98%;
  height: 36px;
  line-height: 36px;
  margin: auto;
  font-size: 12px;
}
.content .el-icon-success {
  font-size: 12px;
}
.span1{position: absolute;left:0;top: 100px;margin-left: 40px;color: #fff;}
.span2{position: absolute;left:0;top: 5px;margin-left: 20px;color: #000;}
.p1{position: absolute;left:0;top: 0;margin-left: 10px;color: #000;font-size: 16px}
.p2{position: absolute;left:0;top: 20px;margin-left: 10px;color: #000;}
.p3{opacity: 0.5;;position: absolute;left:0;top: 100px;text-align: center;color: #fff;background-color: #000;width: 100%;}
</style>