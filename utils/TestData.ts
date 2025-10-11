import { faker } from "@faker-js/faker";

export class TestData {
  generateEmployee() {
    return {
      firstName: faker.person.firstName("male"),
      middleName: faker.person.middleName(),
      lastName: faker.person.lastName(),
      employeeId: faker.string.numeric(6),
    };
  }
}
