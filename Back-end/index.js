const {app } = require("./app");
const {conn} = require("./db");

const port = process.env.PORT || 3001;

conn.sync({ alter: true }).then(() => {
  app.listen(port, () => {
    console.log(`%s listening at ${port}`);
  });
});