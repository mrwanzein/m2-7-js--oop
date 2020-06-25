// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

class Cat {
  constructor() {
    this.species = "cat";
    this.tiredness = 50;
    this.hunger = 80;
    this.loneliness = 40;
    this.happiness = 0;
  }

  sleep = (hours) => {
    this.tiredness -= hours * 5;
    this.happiness += 20;
  };

  eat = (kibbles) => {
    this.hunger -= kibbles / 5;
    this.happiness += 15;
  };

  play = (minutes) => {
    this.loneliness -= minutes * 3;
    this.happiness += 10;
  };

  wait = (minutes) => {
    this.tiredness += minutes * 5;
    this.hunger += minutes * 5;
    this.loneliness += minutes * 5;
    this.happiness -= minutes * 5;
  };
}

let boots = new Cat("Boots", "Siamese");

// B) Make Boots wait 20 minutes and call then console.log(boots);
console.log(boots.tiredness, boots.hunger, boots.loneliness, boots.happiness);

boots.wait(20);

console.log(boots.tiredness, boots.hunger, boots.loneliness, boots.happiness);