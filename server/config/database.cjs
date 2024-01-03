const mysql2 = require('mysql2')

const database =  mysql2.createPool({ 
  user: 'root',
  password: 'root',
  database: 'db-task-master',
  socketPath: '/cloudsql/task-master-409210:europe-west2:db-ticket-master'
});


module.exports = database;