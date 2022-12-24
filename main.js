let data = ['Jan', 'Feb', 'March', 'may', 'June', 'July'];   // we want to insert "April" on the 3rd position;

let position = 3;
let newEl = 'April'

console.log(data);

for (let i = data.length - 1; i >= 0; i--) {
    
    if (i >= position) {
        data[i + 1] = data[i];

    }
    if (i == position) {
        data[i] = newEl;
    }
}
console.log(data);