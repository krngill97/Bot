const inputText = document.getElementById("input_text");

// Command responses
const commands = {
    "/help": "Available commands: /help, /run, /start, /stop, /clear",
    "/run": "Running all processes...",
    "/start": "System is starting...",
    "/stop": "System is stopping...",
    "/clear": "clear"
};

// Event listener for handling input
inputText.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent new line

        // Get the last command
        const lines = inputText.value.trim().split("\n");
        const lastCommand = lines[lines.length - 1];

        // Check if the command is "/clear"
        if (lastCommand === "/clear") {
            inputText.value = ""; // Clear the terminal
        } else {
            // Display command response or error
            inputText.value += commands[lastCommand]
                ? `\n${commands[lastCommand]}\n`
                : "\nCommand not recognized. Type /help for a list of commands.\n";

            // Scroll to the bottom
            inputText.scrollTop = inputText.scrollHeight;
        }
    }
});
