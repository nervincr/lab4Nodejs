module.exports = (app, db) => {
    app.get("/comments", (req, res)  => 
        db.comment.findAll().then((result) => res.json(result))
    );
    app.get("/comment/:id", (req, res)  => 
        db.comment.findByPk(req.params.id).then((result) => res.json(result))
    );
}