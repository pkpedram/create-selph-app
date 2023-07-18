const baseResults = async (Model, type, params, count = false, populate = []) => {
    console.log(type)
    try {
        const types = {
            list: await Model.find(params).populate(...populate),
            info: await Model.findOne(params),
            id: await Model.findById(params.id).populate(...populate)
        }
        let allCount = await Model.count(params);
    
        if(types[type]){
            console.log(params)
            return {
                count: count ?  allCount : 1,
                result: types[type]
            }
        }else{
            return false
        }
    } catch (error) {
    
        console.error(error)
        return false
    }
}

module.exports = {
    baseResults
}