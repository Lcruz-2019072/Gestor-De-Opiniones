'use strict'
import { Schema, model } from "mongoose"

const categorySchema = Schema({
    categoryName: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    }
    
},{
    versionKey: false 
})

export default model('category', categorySchema)
