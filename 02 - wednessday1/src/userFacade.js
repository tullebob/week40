const URL = "http://localhost:3333/api/users"

function getUsers(){
    return fetch(URL)
    .then(res=> res.json())
}

function getUser(id){


}

function addUser(user){

}

function editUser(user){


}

function deleteUser(user){


}

const userFacade = {
    getUsers,
    getUser,
    addUser,
    editUser,
    deleteUser
}

export default userFacade;
