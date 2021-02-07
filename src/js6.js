const { Model,Sequelize,DataTypes } = require('sequelize');


const sequelize = new Sequelize('foobar', 'javad', '1234', {
    host: 'localhost',
    dialect: 'postgres'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

  // sequelize.authenticate().then(event=>console.log("hello")).
  // catch(error=>console.log(error))

  (async () => {
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }   
})() 
  // Code here


  // const User = sequelize.define('User', {
  //   // Model attributes are defined here
  //   firstName: {
  //     type: DataTypes.STRING,
  //     allowNull: false
  //   },
  //   lastName: {
  //     type: DataTypes.STRING
  //     // allowNull defaults to true
  //   }
  // }, {
  //   // Other model options go here
  // });
  // console.log(User === sequelize.models.User); // true
  // console.log(User)
  class USER extends Model {
    static classLevelMethod() {
      return 'foo';
    }
    instanceLevelMethod() {
      return 'bar';
    }
    getFullname() {
      return [this.firstname, this.lastname].join(' ');
    }
    firname1(){
      return this.firstname
    }
  }
  USER.init({
    firstname: Sequelize.TEXT,
    lastname: Sequelize.TEXT
  }, { sequelize });
  
  (async () => {
    try {
        await USER.sync({alter : true})
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }   
    })() 
  console.log(USER.classLevelMethod()); // 'foo'
  const user = USER.build({ firstname: 'Jane', lastname: 'Doe' });
  console.log(user.instanceLevelMethod()); // 'bar'
  console.log(user.getFullname()); // 'Jane Doe'
  console.log(user.firname1())
  console.log(user instanceof USER)
  console.log(user.toJSON())
console.log(JSON.stringify(user,null,2))
console.log(user.favoriteColor)



user.save()
//   //user.save();
  //console.log('saved!!!!')
///////////////////////////////////////////
// console.log("///////////////////////////////////////")
// const User = sequelize.define("user", {
//   name: DataTypes.TEXT,
//   favoriteColor: {
//     type: DataTypes.TEXT,
//     defaultValue: 'green'
//   },
//   age: DataTypes.INTEGER,
//   cash: DataTypes.INTEGER
// });
// (async () => {
//   await sequelize.sync({ force: true });
//   // Code here
// })();
// const jane =  User.build({ name: 'Jane' });
// console.log(jane.name); // "Jane"
/// jane.save()


