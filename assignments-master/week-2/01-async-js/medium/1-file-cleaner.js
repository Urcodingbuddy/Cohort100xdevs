/*
## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/

const fs = require('fs');
const path = require('path');

function cleanFile(filePath) {


    fs.readFile(path.join('Example.txt'), 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading the file ", err);
            return;
        }
        // Remove extra spaces
        const claenedData = data.replace(/\s+/g, ' ').trim();

        fs.writeFile(filePath, claenedData, "utf-8", (err) => {
            if (err) {
                console.error("Error writing the file ", err);
                return;
            }
            console.log("File cleaned successfully");
        });
    });
}

const filePath = path.join("Example.txt");
cleanFile(filePath)