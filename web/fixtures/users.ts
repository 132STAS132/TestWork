import * as faker from 'faker';
export const users = {
  defaultUser() {
    return {
      email: `automation_${faker.random.alphaNumeric(8)}@t3st1ng.co`,
      wrongEmail: `wrong_automation_${faker.random.alphaNumeric(
        8,
      )}@t3st1ng.co`,
      emailInUse: 'ssls.automation+666@gmail.com',
      wrongPassword: 'InvalidPassword123',
      password: '123456',
      name: 'Vasya Pupkin',
      phone: '+380 12345678',
      address: 'Diagon alley 21, Misto, Uryupinsk 612120, Ukraine'
    };
  }
};
