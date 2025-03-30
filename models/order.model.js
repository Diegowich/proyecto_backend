const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
    ID_order: { type: Number, 
        required: true, 
        unique: true },

    client_name: { type: String, 
                required: true },

    item_ordered: { type: String, 
        required: true },

    Quantity_ordered: { type: Number, 
        required: true },

    status: { type: String, 
        enum: ["Pendiente", "Enviado", "Entregado"], 
        default: "Pendiente" },
});

module.exports = mongoose.model("Order", orderSchema);