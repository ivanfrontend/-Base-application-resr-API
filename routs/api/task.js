const {Router} = require('express');
const Tasks = require('../../models/task')
const  router = Router()

// Показать все задания
router.get('/', async (req, res) => {
    task = await Tasks.find()
    try {
        res.send(task)
    } catch (e) {
        console.log(e)
    }
})

// Показать конкретное задание
router.get('/:id', async (req, res) => {
    let task = await Tasks.findOne({_id: req.params.id})
    try {
        res.send(task)
    } catch (e) {
        console.log(e)
    }
})

// Добавить задание
router.post('/', async (req, res) => {
    const tasks = new Tasks({
        task: req.body.task,
    })
    try {
        await tasks.save()
    } catch (e) {
        console.log(e)
    }
    res.sendStatus(200)
})

// Обновить задание
router.put('/:id', async (req, res) => {
    await Tasks.findByIdAndUpdate(req.params.id, req.body)
    res.sendStatus(200)
})

// Удалить задание
router.delete('/:id', async (req, res) => {
    await Tasks.findByIdAndDelete(req.params.id, req.body)
    res.sendStatus(200)
})

module.exports = router