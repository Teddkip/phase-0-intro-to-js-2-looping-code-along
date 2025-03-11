function writeCards(names, eventName) {
    const messages = []; // Create a new empty array to hold the messages
    for (let i = 0; i < names.length; i++) { // Iterate through the input array
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`; // Build the thank you message
        messages.push(message); // Add the message to the new array
    }
    return messages; // Return the new array
}

// Function to count down from a given positive integer
function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

// Example usage
countDown(10);
