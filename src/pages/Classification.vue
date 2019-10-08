<template>
    <div>
        <div style="position:relative">
           <span class="span1"><i class="el-icon-arrow-left" @click="goto()"></i></span> <input type="text" placeholder="搜索鲜花、蛋糕、礼品" style="width:80%;height:36px;border:1px solid #ccc;padding-left:30px;top:0;margin:5px 0 0 50px"><i class="el-icon-search"></i>
        </div>
        <el-tabs tab-position="left" style="height: 100%;margin-top:10px;padding-left:10px">
            <el-tab-pane label="热门推荐" style="">
                <div class="re">
                    <div><img src="../imgs/hot.png" alt="" style="width:272px;height:98px"></div>
                    <ul style="width:97%;display:flex;flex-wrap:wrap;justify-content: space-around;margin-top:20px;box-shadow: #ccc;">
                        <li v-for="item in remen" :key="item.text" style="align-items:center;width:30%;text-align:center;font-size:12px;margin-bottom:10px"><img :src="item.img" style="width:56px;"><p>{{item.text}}</p></li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane label="鲜花">
                <div class="re">
                    <div><img src="../imgs/flower.png" alt="" style="width:272px;height:98px"></div>
                    <ul style="width:97%;display:flex;flex-wrap:wrap;justify-content: space-around;margin-top:20px;box-shadow: #ccc;">
                        <li v-for="item in remen" :key="item.text" style="align-items:center;width:30%;text-align:center;font-size:12px;margin-bottom:10px"><img :src="item.img" style="width:56px;"><p>{{item.text}}</p></li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane label="永生花">
                <div class="re">
                    <div><img src="../imgs/ppf.png" alt="" style="width:272px;height:98px"></div>
                    <ul style="width:97%;display:flex;flex-wrap:wrap;justify-content: space-around;margin-top:20px;box-shadow: #ccc;">
                        <li v-for="item in remen" :key="item.text" style="align-items:center;width:30%;text-align:center;font-size:12px;margin-bottom:10px"><img :src="item.img" style="width:56px;"><p>{{item.text}}</p></li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane label="蛋糕">
                <div class="re">
                    <div><img src="../imgs/cake.png" alt="" style="width:272px;height:98px"></div>
                    <ul style="width:97%;display:flex;flex-wrap:wrap;justify-content: space-around;margin-top:20px;box-shadow: #ccc;">
                        <li v-for="item in remen" :key="item.text" style="align-items:center;width:30%;text-align:center;font-size:12px;margin-bottom:10px"><img :src="item.img" style="width:56px;"><p>{{item.text}}</p></li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane label="特色礼品">
                <div class="re">
                    <div><img src="../imgs/gift.png" alt="" style="width:272px;height:98px"></div>
                    <ul style="width:97%;display:flex;flex-wrap:wrap;justify-content: space-around;margin-top:20px;box-shadow: #ccc;">
                        <li v-for="item in remen" :key="item.text" style="align-items:center;width:30%;text-align:center;font-size:12px;margin-bottom:10px"><img :src="item.img" style="width:56px;"><p>{{item.text}}</p></li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane label="礼篮">
                <div class="re">
                    <div><img src="../imgs/hamper.png" alt="" style="width:272px;height:98px"></div>
                    <ul style="width:97%;display:flex;flex-wrap:wrap;justify-content: space-around;margin-top:20px;box-shadow: #ccc;">
                        <li v-for="item in remen" :key="item.text" style="align-items:center;width:30%;text-align:center;font-size:12px;margin-bottom:10px"><img :src="item.img" style="width:56px;"><p>{{item.text}}</p></li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane label="绿植花卉">
                <div class="re">
                    <div><img src="../imgs/plants.png" alt="" style="width:272px;height:98px"></div>
                    <ul style="width:97%;display:flex;flex-wrap:wrap;justify-content: space-around;margin-top:20px;box-shadow: #ccc;">
                        <li v-for="item in remen" :key="item.text" style="align-items:center;width:30%;text-align:center;font-size:12px;margin-bottom:10px"><img :src="item.img" style="width:56px;"><p>{{item.text}}</p></li>
                    </ul>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    data(){
        return{
            remen:[{
                img:require("../imgs/m_category_flowers_occ_Love.png"),
                text:"送恋人鲜花"
            },{
                img:require("../imgs/m_category_flowers_use_Elder.png"),
                text:"送长辈鲜花"
            },{
                img:require("../imgs/m_category_flowers_occ_Birthday.png"),
                text:"生日鲜花"
            },{
                img:require("../imgs/m_category_hot_Boxedflowers.png"),
                text:"礼盒鲜花"
            },{
                img:require("../imgs/m_category_ppf_sort_Box.png"),
                text:"永生花"
            },{
                img:require("../imgs/m_category_hot_Cake.png"),
                text:"蛋糕"
            },{
                img:require("../imgs/m_category_hot_Cake_ganso.png"),
                text:"元祖蛋糕"
            },{
                img:require("../imgs/m_category_hot_Goldfoilflower.png"),
                text:"金箔花"
            },{
                img:require("../imgs/m_category_hot_Jewelry.png"),
                text:"首饰"
            },{
                img:require("../imgs/m_category_hot_Chocolate_qiaoluo.png"),
                text:"巧罗巧克力"
            },{
                img:require("../imgs/m_category_hot_CreativeGifts.png"),
                text:"创意礼品"
            },{
                img:require("../imgs/m_category_hot_Groupbuy.png"),
                text:"企业团购"
            }]
        }
        
    },
    methods:{
            goto(){
                this.$router.go(-1)
            }
        }
}
</script>
<style scoped>
*{padding: 0;margin: 0;box-sizing: border-box}
ul,li{list-style: none}
.span1{display: inline-block;}
.el-icon-arrow-left{font-size: 26px;position: absolute;left: 15px;top: 10px;}
.el-icon-search{position: absolute;left: 55px;top: 15px;}
.el-tabs__nav .el-tabs__item {padding: 0 10px;}
</style>