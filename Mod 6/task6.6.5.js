const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
const arrValues = [];

for (let key in obj) { 
    if (Array.isArray(obj[key])){
        const mass = obj[key];
        //console.log(mass);
        for (let i = 0; i < mass.length; i +=1){
            arrValues.push(mass[i]);
        }
    } else {
        arrValues.push(obj[key]);
    }
}
console.log(arrValues);