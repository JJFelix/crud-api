import { v4 as uuidv4 } from 'uuid'
let users = [
    // {
    //     firstName:"Felix",
    //     lastName: "Omwenga",
    //     age:22
    // },
    // {
    //     firstName:"JJ",
    //     lastName: "Biggy",
    //     age:19
    // },
    
]

export const getUsers = (req,res)=>{
    // console.log(users)
    res.json({users})
}

export const createUser = (req,res)=>{
    const user = req.body
    const userID = uuidv4()

    const userWithID = { ...user, id:userID } //spread operator

    users.push(userWithID)

    res.send(`User ${user.firstName +" "+ user.lastName} was added to the db`)
} 

export const getUserByID = (req,res)=>{
    const id = req.params.id

    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
}

export const deleteUser = (req,res)=>{
    const {id} = req.params

    users = users.filter((user) => user.id !== id) //filter function removes item for which return vaue is false

    res.send(`User with id ${id} deleted from db`)
}

export const updateUser = (req,res)=>{
    const {id} = req.params
    const {firstName, lastName, age}= req.body
    const userToUpdate = users.find((user)=> user.id === id )

    if(firstName) userToUpdate.firstName = firstName
    if(lastName) userToUpdate.lastName = lastName
    if(age) userToUpdate.age = age

    res.send(`User with id ${id} has been updated`)

}

// module.exports = {getUsers}