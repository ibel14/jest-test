import { sliceTitle } from '../task/func';

describe('Correct title display', () => {
  it('Should return full/origin title', () => {
    expect(sliceTitle('Fire')).toEqual('Fire');
    expect(sliceTitle('Good news for this title!')).toEqual('Good news for this title!'); // 25 symbols
    expect(sliceTitle('Good news for this title')).toEqual('Good news for this title'); // 24 symbols
    expect(sliceTitle('qwertyuiopasdfghjklzxcvb')).toEqual('qwertyuiopasdfghjklzxcvb'); // 24 symbols one word
    expect(sliceTitle('a')).toEqual('a');
    expect(sliceTitle('Zz')).toEqual('Zz');
    expect(sliceTitle('q-Q')).toEqual('q-Q');
    expect(sliceTitle('!')).toEqual('!');
    expect(sliceTitle('')).toEqual('');
  });

  it('Should return title with ...', () => {
    expect(sliceTitle('This title really big and has more than 25 symbols ')).toEqual('This title really big...');
    expect(sliceTitle('Good news for this title!a')).toEqual('Good news for this...'); // 26 symbols
    expect(sliceTitle('Thisisabigfirstword 123456')).toEqual('Thisisabigfirstword...'); // 26 symbols with space
    expect(sliceTitle('This title really big         ')).toEqual('This title really big...');
  });

  it('Should return undefined for one long word', () => {
    expect(sliceTitle('Thisisreallybigtitlewithoutanywordslikeonlyoneword')).toEqual(undefined);
    expect(sliceTitle('12345678912345678912345678')).toEqual(undefined);
  });

  it('should return undefined for wrong argument type', () => {
    expect(sliceTitle(null)).toEqual(undefined);
  });
});