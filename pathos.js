const os = require("os");
const path = require("path");

const filePath = path.join("/uploads", "textfiles", "area.txt");
console.log(filePath);

const user = os.userInfo();
console.log(user, "user info");

const currentOs = {
  name: os.type(),
  time: os.uptime(),
};
console.log(currentOs);
