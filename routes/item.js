const router = require("express").Router();
const item = require("../models/Item");
const { verifyToken } = require("../validation");

//Crud operations


//GET
router.get("/", (req, res) => {
    item.find()
    .then(data => { res.send(data)})
    .catch(err =>{res.status(500).send( {message: err.message });})
});

//GET by id
router.get("/", (req, res) => {
    item.findById(req.params.id)
    .then(data => { res.send(data)})
    .catch(err =>{res.status(500).send( {message: err.message });})
});

//POST
router.post("/", verifyToken, (req, res) => {
    data = req.body;

    item.create(data)
    .then(data => { res.send(data)})
    .catch(err =>{res.status(500).send( {message: err.message });})
});
//PUT
router.put("/:id", verifyToken, (req, res) => {
    const id = req.params.id;

    item.findByIdAndUpdate(id, req.body)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Cannot update the Item with id=" + id + ".  not found!" });
            else
                res.send({ message: "Item was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({ message: "Error updating item with id=" + id });
        });

});
//DELETE 
router.delete("/:id",verifyToken, (req, res) => {
    const id = req.params.id;

    item.findByIdAndDelete(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Cannot delete the Item with id=" + id + ".  not found!" });
            else
                res.send({ message: "Item was deleted successfully." });
        })
        .catch(err => {
            res.status(500).send({ message: "Error deleting Item with id=" + id });
        });

});
module.exports = router;