// find user by username
function findUserByUsername (array, string) {
    return array.find(function(user) {
        return user.string === string;
    })
}

// remove user
function removeUser(array, string) {
    let index = array.findIndex(function(user) {
        return user.string === string;
    })
    if (index === -1) {
        return undefined;
    }
    return array.splice(index[1], 1)[0];
}