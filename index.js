// const app = "I don't do much."

function bumpCounter() {
  let counter = 0

function addBump(){
  counter ++;
  }

function getBumps(){
  return counter;
  }
// **addBump && getBumps need to be returned since they will be used to increase the counter and get the counter value.
  return {
  addBump,
  getBumps,
  };
}

function createAnimal(animalType) {
  return function (deadlyDevice){
    return { animalType, deadlyDevice };
    // { animalType: 'Monkey', deadlyDevice: 'Lightsaber' }
    // This object has two properties, animalType and deadlyDevice that are the given arguments to both functions.
  }
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
var sharkWithFrickinCannon = sharkCreator("Cannon")
