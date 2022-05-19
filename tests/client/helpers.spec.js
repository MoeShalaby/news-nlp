import { isUrl } from '../../src/client/js/helpers';

describe('Testing isUrl funciton', () => {
  it('Should be defined', () => {
         expect(isUrl).toBeDefined();
  });

  it('Should throw an error on empty input', ()=>{
    expect(() => isUrl()).toThrow();
    expect(() => isUrl('')).toThrow();
  });

  it('Should return true on valid URL', ()=>{
    expect(isUrl('http://www.google.com')).toEqual(true);
    expect(isUrl('http://www.google.com/some/routes')).toEqual(true);
    expect(isUrl('www.google.com')).toEqual(true);
    expect(isUrl('www.google.com/some/routes')).toEqual(true);
  });

  it('Should return false on text/invalid URL', ()=>{
    expect(isUrl('This is not a URL')).toEqual(false);
    expect(isUrl('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, accusantium harum similique modi quasi ipsa nulla deleniti dolores quas accusamus neque animi nam est vero amet reprehenderit in. Vitae, veritatis!')).toEqual(false);
  });
});

