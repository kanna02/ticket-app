import { createPool } from 'promise-mysql';

// createUnixSocketPool initializes a Unix socket connection pool for
// a Cloud SQL instance of MySQL.
const createUnixSocketPool = async config => {
  // Note: Saving credentials in environment variables is convenient, but not
  // secure - consider a more secure solution such as
  // Cloud Secret Manager (https://cloud.google.com/secret-manager) to help
  // keep secrets safe.
  return createPool({
    user: 'root', // e.g. 'my-db-user'
    password: 'root', // e.g. 'my-db-password'
    database: 'db-ticket-master', // e.g. 'my-database'
    socketPath: '/cloudsql/task-master-409210:europe-west2:db-ticket-master', // e.g. '/cloudsql/project:region:instance'
    // Specify additional properties here.
    ...config,
  });
};

export default createUnixSocketPool;