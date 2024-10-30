const admin = (res,req, next)=>
    {
        const token = "xyz";
        const adminAuthrised = token === "xyz";
        console.log("auth is checking")
        if(!adminAuthrised){
            res.status(401).send("admin not authorised")
        }else{
            next()
        }
    }
const userAuth = (res,req, next)=>
    {
        const token = "xyz";
        const adminAuthrised = token === "xyz2";
        console.log("auth is checking")
        if(!adminAuthrised){
            res.status(401).send("user not authorised")
        }else{
            next()
        }
    }


    module.exports ={userAuth, admin}