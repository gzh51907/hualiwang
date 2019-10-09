<template>
    <div id="app">
        <header>
      <i class="el-icon-arrow-left" @click="goOff()"></i>
       我的
    </header>
    <div class="nav">
        <p class="p1">Hi,欢迎来到花礼网</p>
        <p class="p2" @click="goto()">登录/注册</p>
    </div>
    <div class="footer">
        <div class="footer-1" style="">
           <div style="border-bottom:1px solid #ccc;display:flex;justify-content: space-between;padding:10px;border-radius-top: 10px;">
                <p>我的订单</p>
            <p style="font-size:14px">全部订单 ></p>
           </div>
           <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="6"><div class="grid-content bg-purple" style="text-align: center"><img src="../assets/myinfo_pendingpay.png" alt=""> 代付款</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light" style="text-align: center"><img src="../assets/myinfo_distribution.png" alt="">今日配送</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple" style="text-align: center"><img src="../assets/myinfo_evaluation.png" alt="">待评价</div></el-col>
        </el-row>
        </div>
    </div>
    <div style="height:105px"></div>
    <div class="footer-2" style="background:#fff;width:95%;margin:auto;text-align:center;padding-top:20px;border-bottom: 1px solid #ccc;">
              <el-row :gutter="20" style="font-size:12px">
  <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-s-comment
el-icon-s-finance"></i> 优惠券</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-s-finance"></i> 权益卡</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-grape"></i> 余额</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-dish"></i> 会员积分</div></el-col>
</el-row>

<el-row :gutter="20" style="font-size:12px;padding:20px 0 20px 0;margin:;">
  <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-location-outline"></i> 收货地址</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-date"></i> 生日纪念提醒</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-star-off"></i> 我的收藏</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-orange"></i> 浏览记录</div></el-col>
</el-row>
        </div>
    <div class="bottom" style="background:#fff;width:95%;margin:20px auto;text-align:center;">
        <el-row :gutter="20" style="font-size:12px;padding:20px 0 20px 0;margin:;">
  <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-service"></i> 联系客服</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-date"></i> 帮组中心</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-star-off"></i> 关于花礼</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-setting"></i> 设置</div></el-col>
</el-row>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        goto(){
            this.$router.push('/reg')
        }
    }
}
</script>
<style lang="scss" scoped>
#app{background: #E8EBEF;height: 700px;width: 100%;position: relative;}
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
.nav{height: 112px;background-image: url(../assets/backgroundv3.png);background-size: 100%;text-align: center;}
.nav .p1{padding: 10px 0 5px 0;font-size: 14px;color: #fff}
.nav .p2{width: 126px;height: 36px;border-radius: 20px;background-color: #fff;margin: auto;line-height: 36px;}
.footer{width: 95%;margin: auto;background: #fff;position: absolute;top:130px;left: 10px}
.row-bg{padding: 10px;}
.row-bg img{width: 32px;height: 32px;display:block;margin: auto;}
.footer-2 i{margin-bottom: 15px;}
.bottom i{margin-bottom: 15px;}
</style>