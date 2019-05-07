const {Doc} = require('../models/doc');

module.exports.showDocs = async function (req, res) {
    const docs = await Doc.find();
    res.json({docs});
};

module.exports.postDoc = async function (req, res) {

    const newDoc = new Doc({
        title: req.body.title,
        markdown: req.body.markdown
    });

    const createdDoc = await newDoc.save();
    res.json({result: createdDoc});

    // doc.save((err, data) => {
    //     if (err) {
    //         console.log(err);
    //         res.send({
    //             result: 'not a success'
    //         })
    //     } else {
    //         res.send({
    //             result: "success",
    //             message: "Doc with id = " + data._id + "saved successfully!"
    //         })
    //     }
    // });
};

module.exports.editDoc = async function (req, res) {
    if (!req.body.title) {
        return res.json({error: "got an empty title" });
    }
    const { title, markdown } = req.body;
    const toUpdate = {
        title, markdown
    };
    const updatedDoc = await Doc.findByIdAndUpdate(req.params.id, toUpdate, { new: true });
    res.json({result: updatedDoc});
};

module.exports.deleteDoc = async function (req, res) {
    if (!req.params.id) {
        return res.json({error: "got an empty object" });
    }
    const deletedDoc = await Doc.findByIdAndDelete(req.params.id);
    res.json({result: deletedDoc});



};