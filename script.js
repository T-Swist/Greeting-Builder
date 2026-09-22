function formatName(firstName, lastName) {
    return prompt("What is your full name?");
}

function getGreeting(timeOfDay) {
    return prompt("What's the time of day?");
}

function createGreeting(){
   const greeting = getGreeting();
   const name = formatName();
   return `Good${greeting}, ${name}!`;
}
alert(createGreeting());