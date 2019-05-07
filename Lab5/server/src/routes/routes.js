const DocController = require('../controllers/DocController');
const express = require('express');

module.exports = (app) =>  {
    app.get('/', (req, res) => {
        res.send(
            [{
                title: "Docs",
                description: "null"
            }]
        )
    });
    app.get("/docs", DocController.showDocs);
    app.post("/doc", DocController.postDoc);
    app.put("/docs/:id", DocController.editDoc);
    app.delete("/docs/:id", DocController.deleteDoc);


    /*
    app.post('/doc', (req, res) => {
            // console.log(req.body.title);
            // console.log(req.body.markdown);
            const doc = new Doc({
                title: req.body.title,
                markdown: req.body.markdown
            });
            // console.log(doc);
            doc.save((err, data) => {
                if (err) {
                    console.log(err);
                    res.send({
                        result: 'not a success'
                    })
                } else {
                    console.log("ok");
                    res.send({
                        result: "success",
                        message: 'Doc with ID_${data._id} saved successfully!'
                    })
                }
            })
        }
    )
     */
};