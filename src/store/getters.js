export default{
    memberInfo(state){
        switch (state.userStatus){
            case  0:
                return '普通会员'
                // break;
            case 1: 
                return 'VIP会员'
                // break;
            case 2: 
                return `高级${state.vipLevel}VIP会员`
                // break;
            default:
                return '普通会员'
                // break;
        }
    }
}