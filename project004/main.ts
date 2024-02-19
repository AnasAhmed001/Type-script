let personName: string ="Anas"
console.log("Lowercase:", personName.toLowerCase());

console.log("Uppercase:", personName.toLocaleUpperCase());

console.log("Titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));