function myalbum(artistname, albumTitle) {
    return { artistname: artistname, albumTitle: albumTitle };
}
var album1 = myalbum("Ali", "Rang-e-Muhabbat");
var album2 = myalbum("Madad", "Roshan Andhera");
var album3 = myalbum("Ayaz", "Mausam-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
//number of tracks
function myalbum2(artistname, albumTitle, numberoftracks) {
    return { artistname: artistname, albumTitle: albumTitle, numberoftracks: numberoftracks };
}
var album4 = myalbum2("Ali", "dil hai", 30);
var album5 = myalbum2("Madad", "ajjeb kahani", 55);
var album6 = myalbum2("Ayaz", "type script ki coding", 39);
console.log(album4);
console.log(album5);
console.log(album6);
