import { faker } from '@faker-js/faker'


function generateUserData() {
    const firstName = faker.person.firstName();  
    const lastName = faker.person.lastName();  
    
    return {
      fullName: faker.person.fullName(),
      pronounce: "Ze/hir",
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
      currentLocation: faker.location.city(),
      currentCompany: faker.company.name(),
      linkedInUrl: `https://linedin.com/in/${firstName}${lastName}/`, 
      gitHubUrl: `https://github.com/${firstName}${lastName}/saviynt-project`, 
      customQuestionsAnswers: faker.lorem.sentence(),
    };
  };

  module.exports = generateUserData;