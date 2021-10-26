const fs = require("fs");
const path = require("path");
const { SHA3 } = require("sha3");


(async () => {
  const hash = new SHA3(256);
  const files = await fs.promises.readdir(path.join(__dirname, "files"));
  const hashes = [];
  for (let index = 0; index < files.length; index++) {
    const buffer = await fs.promises.readFile(
      `${path.join(__dirname, "files", files[index])}`
    );
    hash.update(buffer);
    hashes.push(hash.digest("hex"));
    hash.reset();
  }
  hashes.sort();
  hash.update(hashes.join("") + "6227968@gmail.com");
  const result = hash.digest("hex");
  console.log(result);
})();
