require('dotenv/config')
const prompt = require('prompt-sync')({sigint: true})
const express = require('express')
const User = require('../../models/User')
const { encrypt } = require('../utils/hasher')
const { connectDB } = require('../db')
const app = express()

const createsuperuser = async () => {
    console.log('CREATING SUPER USER! ⌛️')
    try {
        const username = prompt('username: ')
        const email = prompt('email: ')
        const firstname = prompt('firstName: ')
        const lastName = prompt('lastName: ')
        const password =  prompt('password: ', {echo: '*', value: '*pwb default*'})
        const confirmPassword = prompt('confirm password: ', {echo: '*', value: '*pwb default*'})
        
        if(confirmPassword == password){
            
            console.log(typeof password)
            let user =  new User({
                avatar: null,
                password:  encrypt(password),
                role: 'admin',
                username: username,
                email: email,
                firstName: firstname,
                lastName: lastName,
                // clientId: 
            });

        await connectDB()
        await user.save()
        console.log('👍 SUPER USER CREATED! 👍  --> ',user)
            return true
    
        }else{
            console.log('🍌 Password Was Not Confirmed 🍌')
            return null
        }
        
        
    } catch (error) {
        console.error(error)
    }
}

let server = app.listen(2312, async () => {
    await createsuperuser()
    server.close()
})