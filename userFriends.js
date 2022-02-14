const userData = require('./userFriends.json');
// console.log(data[0]);

function findFriends(userName)
{
    if(typeof(userName) !== 'string'){
        return "Invalid Datatype";
    }
    let userFound=0;
    userData.forEach(user => {
    // console.log(user);
        if(user.name === userName) {
            userFriends = user.friends.reduce((friends,obj)=>{
                friends.push(obj.name)
                return friends;},[]);
            userFound = 1;
        }         
    });
    if(userFound === 0){
        return "User not Found";
    }
    if(userFriends.length === 0){
        return `${userName} has no friends`;
    }
    return userFriends;
}

const userName = process.argv[2];
console.log(findFriends(userName));
module.exports = findFriends;