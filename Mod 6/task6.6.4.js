let log = '\n';
for (let i = 1; i < 10; i +=1){
  if (i % 2 == 0){ log += "0 "; }
  else { log += "X "; }
  if (i % 3 == 0){ log += "\n"; } 
}
console.log(log);