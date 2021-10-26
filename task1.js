const { SHA3 } = require("sha3");
const fs = require("fs");

const dir = "./files/";

function getHash() {
  const hash = new SHA3(256);
  const files = fs.readdirSync(dir);
  const hashes = files.map((el) => {
    const buffer = fs.readFileSync(`${dir}${el}`);
    hash.update(buffer);
    let hex = hash.digest("hex");
    hash.reset();
    return hex;
  });
  const str = hashes.sort().join("") + "6227968@gmail.com";
  hash.update(str);
  const result = hash.digest("hex");
  return result;
}
console.log(getHash());
