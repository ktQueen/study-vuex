export default{
    buyVip({commit},e){
        return new Promise((resolve)=>{
            // mock api 交互
            setTimeout(()=>{
                // 修改本地state
                commit('setMemberInfo',{
                    userStatus:e.userStatus,
                    vipLevel:e.vipLevel
                })
                resolve('购买成功')
            },1000)
        })
    },
    getFreeVip({commit,state}){
        // mock api 交互
        return new Promise((resolve)=>{
            setTimeout(()=>{
                if(state.userStatus===0){
                    // 修改本地state
                    commit('setMemberInfo',{
                        userStatus:1,
                        vipLevel:1
                    })
                    resolve('分享成功，您已获得一个月的高级VIP')
                }else{
                    resolve('分享成功')
                }
            },1000)
        })
    }
}