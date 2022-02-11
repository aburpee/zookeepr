const fs = require('fs');


jest.mock('fs');

const {
    filterByQuery,
    findById,
    createNewAnimal,
    validateAnimal
} = require('../lib/animals.js');
const { animals } = require('../data/animals');

test('creats an animal object', () => {
    const animal = createNewAnimal(
        { name: 'darlene', id: 'jhgdja3ng2' },
        animals
    )
})

test('filters by query', () => {
    const startingAnimals = [
        {
            id: '3',
            name: 'erica', 
            species: 'gorilla',
            diet: 'omnivore',
            personalityTraits: ['quirky', 'rash'],
        },
        {
            id: '4', 
            name: 'noel',
            species: 'bear',
            diet: 'carnivore',
            personalityTraits: ['impish', 'sassy', 'brave'],
        },
    ];
});
test("finds by id", () => {
    const startingAnimals = [
      {
        id: "3",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
      },
      {
        id: "4",
        name: "Noel",
        species: "bear",
        diet: "carnivore",
        personalityTraits: ["impish", "sassy", "brave"],
      },
    ];
  
    const result = findById("3", startingAnimals);
  
    expect(result.name).toBe("Erica");
  });
  
  test("validates personality traits", () => {
    const animal = {
      id: "3",
      name: "Erica",
      species: "gorilla",
      diet: "omnivore",
      personalityTraits: ["quirky", "rash"],
    };
  
    const invalidAnimal = {
      id: "3",
      name: "Erica",
      species: "gorilla",
      diet: "omnivore",
    };
  
    const result = validateAnimal(animal);
    const result2 = validateAnimal(invalidAnimal);
  
    expect(result).toBe(true);
    expect(result2).toBe(false);
  });