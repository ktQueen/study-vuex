<template>
    <div class="index">
        <h1>你好</h1>
        <p class="text">
            尊敬的
            <span style="color: red;">{{memberInfo}}用户</span>，欢迎来到前端！
        </p>
        <div class>
            <card
                :course="item"
                v-for="(item, index) in courseList"
                :key="index"
                @goCourse="goCourse"
            ></card>
        </div>
        <button class="footer-opt btn" @click="goUserCenter">充值</button>
    </div>
</template>
<script>
import card from "../components/card";
import {mapGetters,mapState} from 'vuex';
export default {
    name:'index',
    components: {
        card
    },
    data() {
        return {
            courseList: []
        };
    },
    created() {
        // Mock
        this.courseList = [
            {
                id: "1",
                thumb:
                    "//img1.sycdn.imooc.com/5cb831fd0949d9f306000338-590-330.jpg",
                title: "学习vuex",
                description: "2312",
                charge: "",
                userStatus: 0,
                vipLevel: 0
            },
            {
                id: "2",
                thumb:
                    "//img1.sycdn.imooc.com/5cb831fd0949d9f306000338-590-330.jpg",
                title: "实战课程",
                description: "2312",
                charge: "实战课程",
                userStatus: 1,
                vipLevel: 0
            },
            {
                id: "3",
                thumb:
                    "//img1.sycdn.imooc.com/5cb831fd0949d9f306000338-590-330.jpg",
                title: "v12会员专享课程",
                description: "2312",
                charge: "v12会员专享",
                userStatus: 2,
                vipLevel: 12
            }
        ];
    },
    // mapGetters([getters的方法名])
    computed:{
        ...mapState(['userStatus','vipLevel']),
        ...mapGetters(['memberInfo'])
    },
    mounted() {
        console.log(this.userStatus,this.vipLevel);
    },
    methods: {  
        goUserCenter(){
             this.$router.push("./userCenter")
        },
        goCourse(course){
            const res=this.checkPermission(course)
            if(res){
                this.$router.push({
                    name:"course",
                    params:{
                        id:course.id
                    }
                })
                // this.$router.push("./course/"+course.id)
            }else{
                alert('权限不足，无法观看');
            }
        },
        checkPermission(course){
            const userStatus=this.$store.state.userStatus
            const vipLevel=this.$store.state.vipLevel
            if(userStatus>=course.userStatus){
                if(vipLevel>=course.vipLevel){
                    return true
                }
            }
            return false;
        }    
    }
};
</script>
<style lang="less" scoped>
.index {
    padding: 0 20px 20px;
    box-sizing: border-box;
    h1,
    .text {
        text-align: left;
    }
    .footer {
        position: absolute;
        bottom: 0;
        left: 20px;
    }
    .btn {
        width: 100%;
        height: auto;
        color: #fff;
        background: #373737;
        margin: 10px 0 20px;
        padding: 15px;
        box-sizing: border-box;
        border-radius: 5px;
        font-size: 16px;
    }
}
</style>