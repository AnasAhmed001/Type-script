var guest_List = ['Ali', 'Farhan', 'Usama', 'Kashif'];
for (var i = 0; i < guest_List.length; i++) {
    console.log("Respected Sir/Madam " + guest_List[i] + ',\n We invited you on dinner tomorrow\n');
}
var not_present = 'Farhan';
var new_guest = 'Imran Khan';
guest_List[1] = new_guest;
for (var i = 0; i < guest_List.length; i++) {
    console.log("Respected Sir/Madam " + guest_List[i] + ',\n We invited you on dinner tomorrow\n');
}
console.log("Mr. ".concat(not_present, " will not arrive tomorrow for dinner"));
