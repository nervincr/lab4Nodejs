const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const apiComment = require("./app/api/comment");
const apiAuthor = require("./app/api/author");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(express.static("app/public"));
app.use(cors({credentials: false, origin: true}));
apiComment(app, db);
apiAuthor(app, db);
db.sequelize.sync().then(() => {
app.listen(8080, () => console.log("App listening on port 8080!"));
});
