'use strict';

const faker = require('faker')

module.exports.generateTrainingPrograms = () => {
  let training_programs = [];

  for (let i = 0; i < 10; i++) {
    let program_name = faker.company.catchPhrase();
    let start_date = null;
    let end_date = null;
    let max_attendees = faker.random.objectElement({one: 25, two: 15, three: 20, four: 30});

    training_programs.push({
      "program_name": program_name,
      "start_date": start_date,
      "end_date": end_date,
      "max_attendees": max_attendees
    });
  };

  return training_programs;
}