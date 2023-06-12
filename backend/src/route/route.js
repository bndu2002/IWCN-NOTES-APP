const express = require('express')
const router = express.Router()
const { createNote, updateNote, deleteNote } = require('../controller/noteController')

router.get('/test', (req, res) => {
    return res.status(200).send({ status: true, message: 'App Running Successfully' })
})

router.post('/api/create', createNote)

router.put('/api/update', updateNote)

router.delete('/api/delete/:id', deleteNote)

module.exports = router

