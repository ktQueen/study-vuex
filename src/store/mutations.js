export default {
    // mutations都是需要传state的
    login(state,v){
        state.userInfo=v;
    },
    setMemberInfo(state,v){
        state.userStatus=v.userStatus
        state.vipLevel=v.vipLevel
    }
}