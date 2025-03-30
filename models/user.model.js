const {Schema,model} = require('mongoose')


const orderschema = Schema({
    ID_order: {
        type: Number,
        require: true,
        unique: true
    },

    client_name : {
        type: String,
        require: true
        
    },
    
    item_ordered : { 
        type: String,
        require : true
    },

    Quantity_ordered : {
        type: Number,
        require : true
    }

})
const transporterschema = Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },

    client : {
        type: String,
        require: true
        
    },
    
    order : { 
        type: Number,
        require : true
    },

})

module.exports = model('order', orderschema)
module.exports = model('transporter',transporterschema)
