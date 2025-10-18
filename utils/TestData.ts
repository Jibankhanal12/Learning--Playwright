import { faker } from "@faker-js/faker";

export class TestData {
  generateEmployee() {
    const password = faker.internet.password({
      length: 8,
      memorable: false,
      pattern: /[A-Za-z0-9!@#$%^&*()_+=-]/,
    });
    return {
      firstName: faker.person.firstName("male"),
      middleName: faker.person.middleName(),
      lastName: faker.person.lastName(),
      employeeId: faker.string.numeric(6),
      username: faker.internet.username(),
      password,
      confirmPassword: password,
    };
  }
}
