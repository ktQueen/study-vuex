<template>
    <div class="index">
        <h1>你好</h1>
        <p class="text">
            尊敬的
            <span style="color: red;">用户</span>，欢迎来到前端！
        </p>
        <div class>
            <card
                :course="item"
                v-for="(item, index) in courseList"
                :key="index"
            ></card>
        </div>
        <button class="footer-opt btn">充值</button>
    </div>
</template>
<script>
import card from "../components/card";
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
    mounted() {},
    methods: {       
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