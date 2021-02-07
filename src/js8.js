const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('foobar', 'javad', '1234', {
    host: 'localhost',
    dialect: 'postgres' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
    logging: false                 // Default, displays the first parameter of the log function call
  });


  (async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }   
    })() 