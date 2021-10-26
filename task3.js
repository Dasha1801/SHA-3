const crypto = require("crypto");
const fs = require("fs");
const dir = "./files/";

function getHash() {
  const files = fs.readdirSync(dir);
  const hashes = files.map((el) => {
    const buffer = fs.readFileSync(`${dir}${el}`);
    let hex = crypto.createHash("sha3-256").update(buffer).digest("hex");
    return hex;
  });
  const str = hashes.sort().join("") + "6227968@gmail.com";
  let result = crypto.createHash("sha3-256").update(str).digest("hex");
  return result;
}

console.log(getHash());
