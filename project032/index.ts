let current_users: string[] =['saba','admin','babar','anas','usman'];
let new_users: string[] =['fawad','husnain','user3','admin','user4'];

new_users.forEach((newUser) =>{
    if(
        current_users.some(
            (currentUser) =>currentUser.toLowerCase() === newUser.toLowerCase()
        )
    ){
        console.log(`${newUser} will need to enter a new username.`);
        
    }else{
        console.log(`${newUser} is available.`);
        
    }

})