'use strict';

const faker = require('faker')

module.exports.generateTrainingPrograms = () => {
  let training_programs = [];

  for (let i = 0; i < 10; i++) {
    let program_name = faker.company.catchPhrase();
    let start_date = faker.date.future(.5).toISOString();

    //CREATES RANDOM END DATE BETWEEN START DATE AND 14 DAYS
    var addDays = function(start, days) {
      var end_date = new Date(start);
      end_date.setDate(end_date.getDate() + parseInt(days));
      return end_date;
    }

    let prog_length = Math.floor(Math.random() * 14) + 1;    
    
    let end_date = addDays(start_date, prog_length).toISOString();

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