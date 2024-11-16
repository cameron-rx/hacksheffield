const { exec } = require('child_process');


export function FirstSection() {

    const command = 'pwd'; // Replace with your desired command

    exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
      
        if (stderr) {
          console.error(`Stderr: ${stderr}`);
          return;
        }
      
        console.log(`Stdout:\n${stdout}`);
      });
    
    return (
        <div>First Section</div>

    )
}

