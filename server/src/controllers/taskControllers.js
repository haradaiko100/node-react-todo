const db = require("../../models/index");

crud = {
    read_todo: read_todo,
    create_todo: create_todo,
    update_todo: update_todo,
    delete_todo: delete_todo
}

async function read_todo(req, res, next) {
    try {
        const result = await db.Task.findAll();
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function create_todo (req, res, next){
    try {
        const result = await db.Task.create({
            name: req.body.name,
            done: false
        });
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function update_todo (req, res, next){
    try {
        const result = await db.Task.update(
            {
                name: req.body.name,
                done: req.body.done
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
}


async function delete_todo(req, res, next) {
    try {
        const result = await db.Task.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send({
            result: result
        });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = crud