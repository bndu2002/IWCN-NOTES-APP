const noteModel = require('../model/noteModel')

const createNote = async (req, res) => {
    try {

        const { title, content } = req.body

        console.log(req.body)

        if (!title || !content) return res.status(400).send({ status: false, message: 'Title and Content are mandatory' })

        const createdData = await noteModel.create(req.body)

        return res.status(201).send({ status: true, message: 'successfully created', data: createdData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const updateNote = async (req, res) => {
    try {

        const { title, content } = req.body

        const id = req.query.id

        const updatedData = await noteModel.findByIdAndUpdate(
            { _id: id },
            req.body,
            { new: true }
        )

        if (!updatedData) return res.status(404).send({ status: false, message: 'No Note exist' })

        return res.status(200).send({ status: true, message: 'successfully updated', data: updatedData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const deleteNote = async (req, res) => {
    try {


        const id = req.params.id

        console.log(id)

        const deltedData = await noteModel.findByIdAndUpdate(
            { _id: id },
            { $set: { isDeleted: true } },
            { new: true }
        )

        if (!deltedData) return res.status(404).send({ status: false, message: 'No Note exist' })

        return res.status(200).send({ status: true, message: 'successfully deleted' })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = { createNote, updateNote, deleteNote }