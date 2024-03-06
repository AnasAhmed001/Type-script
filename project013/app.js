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
// 
// project 16
console.log('\nUnfortunately we cannot arrange a big table, Only two people allow');
while (guest_List.length > 2) {
    var remove_guest = guest_List.pop();
    console.log("Sorry Sir/Madam.".concat(remove_guest, " you are not invited for dinner"));
}
for (var i = 0; i < guest_List.length; i++) {
    console.log("Respected Sir/Madam " + guest_List[i] + ',\n Yes you are still invited tomorrow on dinner\n');
}
guest_List.splice(0, 2);
console.log(guest_List);
