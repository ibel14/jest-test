import { sliceTitle } from '../task/func';

describe('Correct title display', () => {
  it('Should return full title', () => {
    expect(sliceTitle('Fire')).toEqual('Fire');
    expect(sliceTitle('Good news for this title!')).toEqual('Good news for this title!');
    expect(sliceTitle('Good news for this title')).toEqual('Good news for this title');
    expect(sliceTitle('!')).toEqual('!');
    expect(sliceTitle('')).toEqual('');
    expect(sliceTitle(' ')).toEqual(' ');
  });

  it('Should return title with ...', () => {
    expect(sliceTitle('This title really big and has more than 25 symbols ')).toEqual('This title really big...');
    expect(sliceTitle('Good news for this title!a')).toEqual('Good news for this...');
    expect(sliceTitle('Thisisabigfirstword 123456')).toEqual('Thisisabigfirstword...');
    expect(sliceTitle('Title                  123456')).toEqual('Title                ...');
  });

  it('Should return undefined for one long word', () => {
    expect(sliceTitle('Thisisreallybigtitlewithoutanywordslikeonlyoneword')).toEqual(undefined);
    expect(sliceTitle('12345678912345678912345678')).toEqual(undefined);
  });

  it('should return undefined for wrong argument type', () => {
    expect(sliceTitle(null)).toEqual(undefined);
  });
});