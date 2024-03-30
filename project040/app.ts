function myalbum(artistname: string, albumTitle : string){
    return {artistname, albumTitle}
}

let album1 = myalbum("Ali" , "Rang-e-Muhabbat");
let album2 = myalbum("Madad" , "Roshan Andhera");
let album3 = myalbum("Ayaz", "Mausam-e-Dil");

console.log(album1);
console.log(album2);
console.log(album3);

//number of tracks

function myalbum2(artistname: string, albumTitle: string , numberoftracks: number){
    return{artistname,albumTitle,numberoftracks}
}

let album4 = myalbum2("Ali", "dil hai" , 30);
let album5 = myalbum2("Madad" , "ajjeb kahani" , 55);
let album6 = myalbum2("Ayaz", "type script ki coding", 39);

console.log(album4);
console.log(album5);
console.log(album6);
