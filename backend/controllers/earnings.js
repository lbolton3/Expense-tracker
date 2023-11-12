const EarningSchema = require("../models/EarningsModel")

exports.addEarning = async(req, res) =>{
    const{title, amount, category, description, date} = req.body

    const Pay = EarningSchema({
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
        await Pay.save()
        res.status(200).json({message:  'Pay Added'})
    } catch(error){
        res.status(500).json({message: 'Server Error'})
    }
    

    console.log(Pay)

}

exports.getEarnings = async (req, res) => {
    try {
        const Pays = await EarningSchema.find().sort({ createdAt: -1 })
        res.status(200).json(Pays)
    } catch (error) {
        res.status(500).json({ message: 'Server error' })
    }
}

exports.deleteEarnings = async(req, res) =>{
    const {id} = req.params;
 EarningSchema.findByIdAndDelete(id)
       .then((Pay) =>{
            res.status(200).json({message: 'Pay Deleted'})
       })
       .catch((error) =>{
            res.status(500).json({message: 'Server Error'})
       })
}
