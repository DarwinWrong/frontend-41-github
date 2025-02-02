const { spawn } = require('child_process');

/**
 * Runs a command with the specified arguments.
 * 
 * This function spawns a child process to execute the given command.
 * It listens for errors and logs them to the console.
 * If the command exits with a non-zero code, it logs an error message.
 * 
 * @param {string} command - The command to run.
 * @param {string[]} args - An array of arguments to pass to the command.
 */
function runCommand(command, args) {
    const child = spawn(command, args, { stdio: 'inherit', shell: true });

    child.on('error', (err) => {
        console.error(`Error running command ${command}:`, err);
    });

    child.on('close', (code) => {
        if (code !== 0) {
            console.error(`Command ${command} exited with code ${code}`);
        }
    });
}

// Paths to the SCSS and CSS files
const scssPath = 'assets/scss/style.scss';  // Source SCSS file
const cssPath = 'assets/css/style.css';     // Output CSS file
const minCssPath = 'assets/css/style.min.css'; // Minified output CSS file

// Run two commands in parallel
// First command watches the SCSS file and compiles it to CSS
runCommand('npx', ['sass', '--watch', `${scssPath}:${cssPath}`]);

// Second command watches the SCSS file, compiles and compresses it to a minified CSS file
runCommand('npx', ['sass', '--watch', '--style', 'compressed', `${scssPath}:${minCssPath}`]);