const fs = require("fs");
// let data = "Hello World";
// fs.writeFile("new3.txt", data, (err) => {
//   if (err) throw err;
//   console.log("mmm");
// });

async function writeFile(filename, txt) {
  try {
    await fs.promises.writeFile(filename, txt);
    console.log("File Successfully created");
  } catch (err) {
    console.log(err);
  }
}
writeFile("hello", "This is Vivek ");
