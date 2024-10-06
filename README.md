# node_file_system

## Overview
The `node_file_system` project demonstrates various file operations in Node.js using the `fs` module. It includes examples of asynchronous and synchronous methods for reading, writing, appending, renaming, and deleting files.

## Features
- **Asynchronous and Synchronous File Operations**: Demonstrates both async and sync methods for file handling.
- **Error Handling**: Implements error handling for file operations to manage exceptions gracefully.
- **Modular Structure**: Each file operation is separated into its own module for better organization and readability.

## Installation
To use this project, ensure you have Node.js installed. Clone the repository and install the necessary dependencies.

```bash
npm install
```

## Usage
To run the file operations, execute the `app.js` file. This will trigger all the file operations defined in the other modules.

```bash
node app.js
```

### File Operations
1. **Reading Files**: 
   - Asynchronous and synchronous reading of files using `fs.readFile` and `fs.readFileSync`.
   - Example: `asyncExample.txt` and `syncExample.txt`.

2. **Writing Files**: 
   - Asynchronous and synchronous writing to files using `fs.writeFile` and `fs.writeFileSync`.
   - Example: Writing to `asyncExample.txt` and `syncExample.txt`.

3. **Appending to Files**: 
   - Asynchronous and synchronous appending to files using `fs.appendFile` and `fs.appendFileSync`.
   - Example: Appending data to `asyncExample.txt` and `syncExample.txt`.

4. **Renaming Files**: 
   - Asynchronous and synchronous renaming of files using `fs.rename` and `fs.renameSync`.
   - Example: Renaming `asyncExample.txt` to `newAsyncExample.txt`.

5. **Deleting Files**: 
   - Asynchronous and synchronous deletion of files using `fs.unlink` and `fs.unlinkSync`.
   - Example: Deleting `asyncExample.txt` and `syncExample.txt`.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.
