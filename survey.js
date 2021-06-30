const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profileAnswers = {};

rl.question('What\'s your name? ', (answer) => {
  profileAnswers['name'] = answer;

  rl.question('What\'s an activity you like doing? ', (answer) => {
    profileAnswers['activity'] = answer;
    
    rl.question('What do you listen to while doing that? ', (answer) => {
      profileAnswers['music'] = answer;
      
      console.log(`${profileAnswers.name} loves listening to ${profileAnswers.music} while ${profileAnswers.activity}!`)

      rl.close();
    })
  })
});