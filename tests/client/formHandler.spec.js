import { handleSubmit } from '../../src/client/js/formHandler';

 
describe('Testing form submission function: handleSubmit', () => {
  it('Should be defined', () => {
         expect(handleSubmit).toBeDefined();
  });
  
  /*it('show throw a error on empty parameter', async () => {
    await expect(handleSubmit()).rejects()
  });*/
});