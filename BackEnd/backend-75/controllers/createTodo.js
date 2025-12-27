

const TODO = require("../models/Todo");  // import the schema witch will hanlde by schema

// routes 

exports.createTodo = async(req,res) =>{
    try{
        const {title,description} = req.body;

        const response = await TODO.create({title,description});

        res.status(200).json({
            sucess:true,
            data:response,
            mesaage:"entry created sucessful"
        })

    }
    catch (error){
        console.error(error);

    }
}

