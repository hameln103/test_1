const fs = require('fs').promises;
async function readDir() {
    try{
        const files = await fs.readdir('./');
        console.log(files);

    }
    catch{
        console.error(err);
    }
}

readDir();