import { faker } from '@faker-js/faker';

export const generateCandidate = () => {
  return {

    firstName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    contactNumber: faker.phone.number()
};  
};
