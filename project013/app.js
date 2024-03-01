//project 13
var guest_List = ['Ali', 'Farhan', 'Usama', 'Kashif'];
// for(let i=0; i < guest_List.length; i++){
//     console.log("Respected Sir/Madam " +guest_List[i] + ',\n We invited you on dinner tomorrow\n');
// }
//project 14
var not_present = 'Farhan';
var new_guest = 'Imran Khan';
guest_List[1] = new_guest;
for (var i = 0; i < guest_List.length; i++) {
    console.log("Respected Sir/Madam " + guest_List[i] + ',\n We invited you on dinner tomorrow\n');
}
console.log("Mr. ".concat(not_present, " will not arrive tomorrow for dinner"));
//project 15
guest_List.unshift('Shaheen', 'Usama', 'Rizwan');
for (var i = 0; i < guest_List.length; i++) {
    console.log("Respected Sir/Madam " + guest_List[i] + ',\n We invited you on dinner tomorrow.We found a bigger dinner table.\n');
}
;
