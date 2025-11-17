const string2json = require('../template/src/api/middlewares/string2json');

describe('string2json()', () => {
  it('should return a proper JSON object after receiving valid JSON as a string and call next()', () => {
    const message = { payload: '{"lumens": 3}' };
    const next = jest.fn();

    string2json(message, next);

    expect(message.payload).toEqual({ lumens: 3 });
    expect(next).toHaveBeenCalledTimes(1);
  });

  it('should return a proper JSON object after receiving corrupted JSON as a string and call next()', () => {
    const message = { payload: '{ lumens : 3 }' };
    const next = jest.fn();

    string2json(message, next);

    expect(message.payload).toEqual({ lumens: 3 });
    expect(next).toHaveBeenCalledTimes(1);
  });
});
