const database = require('./config/database.cjs');
const express = require('express');
const cors = require('cors');

const app = express();
app.enable('trust proxy');
app.use(cors());
app.use(express.json());

//Start Route
app.get("/", (req,res)=>{
  res.send("welcome to the server app!");
  console.log("test");
});

// Route to get all Users
app.get("/api/get/users", (req,res)=>{
  req.setTimeout(500000);
  database.query("SELECT * FROM User", (err,result)=>{
    if(err) {
      console.log(err.message)
    } 
    res.send(result)
    console.log("query executed")
  });   
});


// Route to get single User by user-id
app.get("/api/getUserFromId/:id", (req,res)=>{
  const id = req.params.id;
  database.query("SELECT * FROM User WHERE user_id = ?", id, (err,result)=>{
    req.setTimeout(500000);
    if(err) {
      console.log(err)
    } 
    res.send(result)
  });      
});

// Route to get all Tickets
app.get("/api/get/tickets", (req,res)=>{
  req.setTimeout(500000);
  database.query("SELECT * FROM Ticket", (err,result)=>{
    if(err) {
      console.log(err.message)
    } 
    res.send(result)
    console.log("query executed")
  });   
});


// Route to get single Ticket by ticket-id
app.get("/api/getTicketFromId/:id", (req,res)=>{
  const id = req.params.id;

  database.query("SELECT * FROM Ticket WHERE ticket_id = ?", id, (err,result)=>{
    req.setTimeout(500000);
    if(err) {
      console.log(err)
    } 
    res.send(result)
  });      
});

// Route to get all Tickets with same Project Id
app.get("/api/getTicketFromProjectId/:id", (req,res)=>{
  const id = req.params.id;

  database.query("SELECT * FROM Ticket WHERE project_id = ?", id, (err,result)=>{
    req.setTimeout(500000);
    if(err) {
      console.log(err)
    } 
    res.send(result)
  });      
});

// Route to get all Projects
app.get("/api/get/projects", (req,res)=>{
  req.setTimeout(500000);
  database.query("SELECT * FROM Project", (err,result)=>{
    if(err) {
      console.log(err.message)
    } 
    res.send(result)
    console.log("query executed")
  });   
});


// Route to get single Ticket by ticket-id
app.get("/api/getProjectFromId/:id", (req,res)=>{
  const id = req.params.id;

  database.query("SELECT * FROM Project WHERE project_id = ?", id, (err,result)=>{
    req.setTimeout(500000);
    if(err) {
      console.log(err)
    } 
    res.send(result)
  });      
});

// Route to create new User
app.post("/api/post/user", (req,res)=>{
  req.setTimeout(500000);
  const name = req.body.name;
  const type = req.body.type;
  const organisation = req.body.organisation;
  const last_name = req.body.last_name;
  const email = req.body.email;

  database.query("INSERT INTO User (name, type, organisation, last_name, email) VALUES (?,?,?,?,?)",[name,type,organisation, last_name, email], (err,result)=>{
    if(err) {
      console.log(err.message)
    } 
    res.send("inserted new user")
    console.log("query executed")
  });   
});

// Route to create new Ticket
app.post("/api/post/ticket", (req,res)=>{
  req.setTimeout(500000);
  const title = req.body.title;
  const description = req.body.description;
  const user_id = req.body.user_id;
  const project_id = req.body.project_id;
  const complexity = req.body.complexity;
  const ticket_status = req.body.status;
  const priority = req.body.priority;
  const completion_date = req.body.completion_date;

  database.query("INSERT INTO Ticket (title, description, user_id, project_id, complexity, ticket_status, priority, completion_date) VALUES (?,?,?,?,?,?,?,?)",[title, description, user_id, project_id, complexity, ticket_status, priority, completion_date], (err,result)=>{
    if(err) {
      console.log(err.message)
    }
    res.send("inserted new ticket")
    console.log("query executed") 
  });   
});

// Route to create new Project
app.post("/api/post/project", (req,res)=>{
  req.setTimeout(500000);
  const title = req.body.title;
  const description = req.body.description;
  const completion_date = req.body.completion_date;
  const members = req.body.members;

  database.query("Insert INTO Project (title, description, completion_date, members) VALUES (?,?,?,?)",[title, description, completion_date, members], (err,result)=>{
    if(err) {
      console.log(err.message)
    } 
    res.send("inserted new project")
    console.log("query executed")
  });   
});

// Route to update existing Ticket by id
app.put("/api/update/ticket/:id", (req,res)=>{
  req.setTimeout(500000);
  const id = req.params.id;
  const title = req.body.title;
  const description = req.body.description;
  const user_id = req.body.user_id;
  const project_id = req.body.project_id;
  const complexity = req.body.complexity;
  const ticket_status = req.body.ticket_statusstatus;
  const priority = req.body.priority;
  const completion_date = req.body.completion_date;

  database.query(`UPDATE Ticket SET title="${title}", description="${description}", user_id="${user_id}", project_id="${project_id}", complexity="${complexity}", ticket_status="${ticket_status}", priority="${priority}", completion_date="${completion_date}" WHERE ticket_id = "${id}"`,[title, description, user_id, project_id, complexity, ticket_status, priority, completion_date, id], (err,result)=>{
    if(err) {
      console.log(err.message)
    }
    res.send("updated ticket")
    console.log("query executed") 
  });   
});

// Route to update existing Project by id
app.put("/api/update/project/:id", (req,res)=>{
  req.setTimeout(500000);
  const id = req.params.id;
  const title = req.body.title;
  const description = req.body.description;
  const completion_date = req.body.completion_date;
  const members = req.body.members;

  database.query(`UPDATE Project SET title="${title}", description="${description}", completion_date="${completion_date}, members="${members}" WHERE project_id="${id}"`,[title, description, completion_date, members, id], (err,result)=>{
    if(err) {
      console.log(err.message)
    } 
    res.send("updated project")
    console.log("query executed")
  });   
});

// Route to update existing User by id
app.put("/api/update/user/:id", (req,res)=>{
  req.setTimeout(500000);
  const id = req.params.id;
  const name = req.body.name;
  const type = req.body.type;
  const organisation = req.body.organisation;
  const last_name = req.body.last_name;
  const email = req.body.email;

  database.query(`UPDATE User SET name="${name}", type="${type}", organisation="${organisation}, last_name="${last_name}, email="${email}" WHERE user_id="${id}"`,[name, type, organisation, last_name, email, id], (err,result)=>{
    if(err) {
      console.log(err.message)
    } 
    res.send("updated user")
    console.log("query executed")
  });   
});

// Route to delete a Ticket by id
app.delete("/api/delete/ticket/:id", (req,res)=>{
  req.setTimeout(500000);
  const id = req.params.id;
  database.query("DELETE FROM Ticket WHERE ticket_id = ?", id, (err,result)=>{
    if(err) {
      console.log(err.message)
    } 
    res.send("deleted ticket")
    console.log("query executed")
  });   
});

// Route to delete a Project by id
app.delete("/api/delete/project/:id", (req,res)=>{
  req.setTimeout(500000);
  const id = req.params.id;
  database.query("DELETE FROM Project WHERE project_id = ?", id, (err,result)=>{
    if(err) {
      console.log(err.message)
    } 
    res.send("deleted project")
    console.log("query executed")
  });   
});

// let App Engine set Port OR use port 8080 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});