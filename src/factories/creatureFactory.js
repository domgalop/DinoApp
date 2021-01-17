// generate unique Id for each creature

function generateId() {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
}

// constructor function to generate creatures (dino and human)
function CreatureFactory({
  diet = '',
  fact = '',
  hasName = false,
  height = 0,
  name = '',
  species = '',
  weight = 0,
  when = '',
  where = '',
} = {}) {
  this.diet = diet;
  this.fact = fact;
  this.hasName = hasName;
  this.height = height;
  this.id = generateId();
  this.name = name;
  this.species = species;
  this.weight = weight;
  this.when = when;
  this.where = where;
}

// add compare methods to CreatureFactory prototype

CreatureFactory.prototype.compareWeight = function compareWeight(human) {
  return (this.weight > human.weight) ? `${this.species} you are like godzilla to ${human.name}` : `you can share suite with ${human.name}`;
};

CreatureFactory.prototype.compareHeight = function compareHeight(human) {
  return (this.height > human.height) ? `${this.species} you are like a skyscraper to ${human.name}` : `${this.species} your height is equivalent to ${human.name}`;
};

CreatureFactory.prototype.compareWhere = function compareWhere(human) {
  return (this.where === human.where) ? `${this.species} you have the same nationality as ${human.name}` : `${this.species} you where born far away from ${human.name}`;
};

CreatureFactory.prototype.compareWhen = function compareWhen(human) {
  return (this.when === human.when) ? `${human.name}, this human is a time traveler, he live in the same age as you ${this.species}` : `${this.species} you are an ancient specie for ${human.name}`;
};

CreatureFactory.prototype.compareDiet = function compareDiet(human) {
  return (this.diet === human.diet) ? `${this.species} you can grab a dinner with ${human.name}` : `${this.species}, ${human.name} can be your dinner`;
};

CreatureFactory.prototype.compareFacts = function compareFacts(human) {
  return (this.weight === human.weight && this.diet === human.diet) ? `${this.species}, ${human.name} you are lost twins` : `${this.species}, ${human.name} is an alien for your era`;
};

export default CreatureFactory;
