const fs = require("fs");

if (fs.existsSync("./uploads/textfiles/area.txt")) {
  fs.readFile("./uploads/textfiles/area.txt", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data.toString());
  });

  const fileContent = fs.readFileSync("./uploads/textfiles/area.txt");
  console.log(fileContent.toString(), "sync method");
  fs.writeFile("./uploads/textfiles/area.txt", "area of square is 8", (err) => {
    if (err) {
      console.log("Write error", err);
    }
  });
  const fC2 = fs.readFileSync("./uploads/textfiles/area.txt");
  console.log(fC2.toString(), "sync method 2");

  console.log("last line");
}
if (!fs.existsSync("files")) {
  fs.mkdir("files", (err) => {
    if (err) {
      console.log(err);
    }
  });
}

if (fs.existsSync("./uploads/textfiles/area.txt")) {
  fs.unlink("./uploads/textfiles/area.txt", (err) => {
    if (err) {
      console.log("Delete error", err);
    }
    console.log("FIle deleted successfully");
  });
} else {
  console.log("file does not exists");
}
