

export default class userDTO {

    constructor(user){
        this.id=`${user._id}`
       this.username=`${user.firstName} ${user.lastName}`
       this.email=`${user.email}`
       this.role=`${user.role}`
       this.isAdmin=`${user.isAdmin}`
       this.market=`${user.market}`
       this.marketAddress=`${user.marketAddress}`
    }

    getUser = async () => {
        return {
            username: this.username,  
            email:this.email,
            rol:this.role,
            id:this.id,
            isAdmin:this.isAdmin,
            market:this.market,
            marketAddress:this.marketAddress
        }
    }
}