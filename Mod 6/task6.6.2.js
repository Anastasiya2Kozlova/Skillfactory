const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
const setCollection = new Set();
for (let i = 0; i < arr.length; i +=1){
  setCollection.add(arr[i]);
}
console.log(setCollection);
