let guest_List : string[] = ['Ali','Farhan','Usama','Kashif'];
for(let i=0; i < guest_List.length; i++){
    console.log("Respected Sir/Madam " +guest_List[i] + ',\n We invited you on dinner tomorrow\n');
}

let not_present : string ='Farhan';
let new_guest : string ='Imran Khan';
guest_List[1]= new_guest;
for(let i=0; i < guest_List.length; i++){
    console.log("Respected Sir/Madam " +guest_List[i] + ',\n We invited you on dinner tomorrow\n');
}
console.log(`Mr. ${not_present} will not arrive tomorrow for dinner`);
