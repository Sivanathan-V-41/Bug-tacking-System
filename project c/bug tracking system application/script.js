// Function to file the Bug into the Bug Tracking System
function fileBug(id) {
    console.log("********** FILING A BUG ***********");

    const currentTime = new Date();
    const name = prompt("Enter your name:");
    const bugtype = prompt("Enter bug type:");
    const bugpriority = prompt("Enter bug priority:");
    const bugdescription = prompt("Enter the bug description:");

    const fileName = `${name}${id}.txt`;

    console.log("Filename: " + fileName);

    const bugStatusOptions = [
        "NOT YET ASSIGNED",
        "IN PROCESS",
        "FIXED",
        "DELIVERED"
    ];

    const bugStatus = prompt(
        "Status of bug:\n1. NOT YET ASSIGNED\n2. IN PROCESS\n3. FIXED\n4. DELIVERED\nENTER YOUR CHOICE:"
    );

    const fileContent = `
        DATE AND TIME: ${currentTime}
        BUG ID: ${id}
        BUG FILED BY: ${name}

        TYPE OF BUG: ${bugtype}
        BUG PRIORITY: ${bugpriority}
        BUG DESCRIPTION: ${bugdescription}
        DATE AND TIME: ${currentTime}
        BUG STATUS: ${bugStatusOptions[parseInt(bugStatus) - 1]}
    `;

    // Use an appropriate method to save the file content to a file or database
    console.log(fileContent);
}

// Function to Change the status of the Bug
function changeStatus() {
    console.log("************* Change status **************");

    const currentTime = new Date();
    const name = prompt("Enter file name:");
    const bugStatusOptions = [
        "NOT YET ASSIGNED",
        "IN PROCESS",
        "FIXED",
        "DELIVERED"
    ];

    const bugStatus = prompt(
        "1. NOT YET ASSIGNED\n2. IN PROCESS\n3. FIXED\n4. DELIVERED\nENTER YOUR CHOICE:"
    );

    const fileContent = `
        DATE AND TIME: ${currentTime}
        BUG STATUS: ${bugStatusOptions[parseInt(bugStatus) - 1]}
    `;

    // Use an appropriate method to append the file content to the existing file or update the database
    console.log(fileContent);
}

// Function to report the Bug in the Bug Tracking System
function reportBug() {
    console.log("********** REPORT **********");

    const name = prompt("Enter file name:");

    // Use an appropriate method to retrieve the file content from the file or database
    console.log("File content for " + name);
}

// Driver Code
function bugTrackingSystem() {
    console.log("*************** BUG TRACKING SYSTEM ***************");

    let id = 0;

    while (true) {
        const number = prompt(
            "1. FILE A NEW BUG\n2. CHANGE THE STATUS OF THE BUG\n3. GET BUG REPORT\n4. EXIT\n\n ENTER YOUR CHOICE:"
        );

        switch (parseInt(number)) {
            case 1:
                id++;
                fileBug(id);
                break;
            case 2:
                changeStatus();
                break;
            case 3:
                reportBug();
                break;
            case 4:
                return;
            default:
                console.log("\nInvalid entry\n");
                break;
        }
    }
}

// Run the bug tracking system
bugTrackingSystem();
