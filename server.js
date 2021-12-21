const { animals } = require('./data/animals');
const express = require('express');
const app = express();

function filterByQuery(query, animalsArray) {
    let personalityTrainsArray = [];
    //note that we save the animals array as filtered results here:
    let filteredResults = animalsArray;
    if (query.personalityTraits) {
        //save personality traits as a dedicated array
        //if personality trains is a string, place it into a new array and save
        if (typeof query.personalityTraits === 'string') {
            personalityTraitsArray = [query.personalityTraits];
        } else {
            personalityTraitsArray = query.personalityTraits;
        }
        //loop through each trait in the personality traits array:
        personalityTraitsArray.forEach(trait => {
            //check the trait against each animal in the filtered results array
            //it is initially a copy of the animals array
            //but here we update it for each trait in the for each loop
            //for each trait being targeted by the filter, the filtered results
            //array will then contain only the entries that contain the trait,
            //so at the end we'll have an array of animlas that have every one
            //of the traits when the for each loop is finished
            filteredResults = filteredResults.filter(
                animal => animal.personalityTraits.indexOf(trait) !== -1
            );
        });
    }
    if (query.diet) {
        filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.species) {
        filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
        filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
}

app.get('/api/animals', (req, res) => {
    let results = animals;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
})

app.listen(3001, () => {
    console.log('api server now on port 3001');
});