import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const icons = {};

for (const file of fs.readdirSync(__dirname)) {
    if (file.endsWith(".svg")) {
        icons[file] = fs.readFileSync(path.join(__dirname, file), "utf-8");
    }
}

export default icons;
