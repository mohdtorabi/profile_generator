const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let questions = ["What's your name? Nicknames are also acceptable :)",

"What's an activity you like doing?",

"What do you listen to while doing that?",

"Which meal is your favourite (eg: dinner, brunch, etc.)",

"What's your favourite thing to eat for that meal?",

"Which sport is your absolute favourite?",
"What is your superpower? In a few words, tell us what you are amazing at!"];
//let dataBase = [];
rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  rl.question("What's an activity you like doing?", (activity) => {
    
    rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (meal) => {
    
      rl.question("What's your favourite thing to eat for that meal", (food) => {
    
        rl.question("Which sport is your absolute favourite?", (sport) => {

          rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superPower) => {
    
            console.log(`I'm ${name} an Entrepreneur that loves to ${activity} everyday. in fact that's how I make money. Usually my day starts with my favourite meal of the day, ${meal}. Next before heading to work, I do ${sport} around my house for 1 hour. while taking shower I try to show my superpower by ${superPower}. then I head to my work... `);
            
            rl.close();
    
          });
  
    
        });
    
      });
  
    
    });
    
  });
});
  
