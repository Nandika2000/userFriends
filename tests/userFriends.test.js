
const findFriends = require('../userFriends');
describe('userFriends Function',function(){
it('should return friends of the user if userName is in userData', function(){
    const result = findFriends('Barton Mckee');
    expect(result).toEqual([ 'Cooper Kinney', 'Lenore Jefferson', 'Krystal Sheppard' ]);
});
it('should return user not found if userName is not in userData', function(){
    const result = findFriends('Nandika');
    expect(result).toBe('User not Found');
});
it('should return invalid datatype if userName is not string', function(){
    const result = findFriends(123);
    expect(result).toEqual('Invalid Datatype');
});
});