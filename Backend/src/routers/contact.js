const express=require('express')
const Contact=require('../models/contact')

const router=express.Router()

router.post('/contact', async (req, res)=>{
    const contact=new Contact(req.body)
    try {
        await contact.save()
        res.status(201).send({
            "status": "success",
            "data": contact
        })
    } catch (error) {
        res.status(400).send({
            "status": "error",
            "data": error
        })
    }
})

router.get('/contact', async (req, res)=>{
    const q=req.query.q
    if (!q) {
        const contacts=await Contact.find({})
        return res.status(200).send({
            "status": "success",
            "data": contacts
        })
    }
    const contacts=await Contact.find({$or: [{"firstName": {"$regex": q, "$options": "i"}}, {"lastName": {"$regex": q, "$options": "i"}}]})
    res.status(200).send({
        "status": "success",
        "data": contacts
    })
})

router.get('/contact/:id', async (req, res)=>{
    const _id=req.params.id
    const contact=await Contact.findOne({_id})
    if (!contact) {
        return res.status(404).send({
            "status": "error"
        })
    }
    res.status(200).send({
        "status": "success",
        "data": contact
    })
})

// router.patch('/contact/:id', async (req, res)=>{
//     const _id=req.params.id
//     const contact=await Contact.findOne({_id})
//     updates=Object.keys(req.body)
//     try {
//         updates.forEach((update)=>contact[update]=req.body[update])
//         await contact.save()
//         res.status(200).send({
//             "status": "success",
//             "data": contact
//         })
//     } catch (error) {
//         res.status(400).send({
//             "status": "error",
//             "data": error
//         })
//     }
// })

router.delete('/contact/:id', async (req, res)=>{
    const _id=req.params.id
    const contact=await Contact.findOne({_id})
    if (!contact) {
        return res.status(200).send({
            "status": "error",
        })
    }
    try {
        await contact.remove()
        res.status(200).send({
            "status": "success",
        })
    } catch (error) {
        res.status(500).send({
            "status": "error"
        })
    }
})

module.exports=router