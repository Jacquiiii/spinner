
let timer = 0;
const chars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];

for (let i = 0; i < chars.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${chars[i]}   `);
  }, timer += 200);
}



// Alternative placed into a function
// const spinner2 = () => {
//   let timer = 0;
//   const chars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];

//   for (let i = 0; i < chars.length; i++) {
//     setTimeout(() => {
//       process.stdout.write(`\r${chars[i]}   `);
//     }, timer += 200);
//   }
// };
// console.log(spinner2());