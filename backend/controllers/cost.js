const CostSchema = require("../models/CostModel")
exports.addCost = async(req, res) =>{
    const{title, amount, category, description, date} = req.body

    const cost = CostSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try{
        //validations(incase inputs are empty)
        if(!title|| !category || !description || !date){
            return res.status(400).json({message:'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'value: amount must be a positive number!'})
        }
        await cost.save()
        res.status(200).json({message: 'Cost Added'})
    } catch(error){
        res.status(500).json({message: 'Server Error'})
    }
    console.log(cost)
}

exports.getCost = async (req, res) => {
    try {
        const cost = await CostSchema.find().sort({ createdAt: -1 })
        res.status(200).json(cost);
    }catch(error) {
        res.status(500).json({message:'Server error'})
    }
}

exports.deleteCost = async(req, res) =>{
    const {id} = req.params;
    CostSchema.findByIdAndDelete(id)
       .then((cost) =>{
            res.status(200).json({message: 'Expense Deleted'})
       })
       .catch((error) =>{
            res.status(500).json({message: 'Server Error'})
       })
}
