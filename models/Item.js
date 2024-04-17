const mongoose = require ("mongoose");




const Schema = mongoose.Schema;

let itemSchema = new Schema(
    {
    
        name: {type: String, required: true},
        
        damagePerSec:{type: Number, required: true},
        prefix1:{type: String},
        prefix2:{type: String},
        sufix1:{type: String},
        sufix2:{type: String}
        
        
    }
)

module.exports = mongoose.model("item", itemSchema);