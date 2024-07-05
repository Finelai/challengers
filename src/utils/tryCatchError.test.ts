import tryCatchError from './tryCatchError';

describe('function tryCatchError', () => {
  it('return Error message in string', async () => {
    const someErrMessage = 'some error message';

    function getError() {
      try {
        throw new Error(someErrMessage);
      } catch (error) {
        return someErrMessage === tryCatchError(error);
      }
    }

    const isErrorsEqual = await getError();

    expect(isErrorsEqual).toBeTruthy;
  });

  it('return string if error is string', () => {
    const someErrMessage = 'some error message';

    const errorResult = tryCatchError(someErrMessage);
    const errorResultType = typeof errorResult;

    expect(errorResultType).toBe('string');
    expect(errorResult).toBe(someErrMessage);
  });

  it('return string if error is any object', () => {
    const someErrObj = {go: 'some error message'};
    const someErrObjStringify = JSON.stringify(someErrObj);

    const errorResult = tryCatchError(someErrObj);
    const errorResultType = typeof errorResult;

    expect(errorResultType).toBe('string');
    expect(errorResult).toBe(someErrObjStringify);
  });

  it('return string if error is object with message', () => {
    const someErrMessage = 'some error message';
    const someErrMessageObj = {message: someErrMessage};

    const errorResult = tryCatchError(someErrMessageObj);
    const errorResultType = typeof errorResult;

    expect(errorResultType).toBe('object');
    expect(errorResult).toBe(someErrMessage);
  });
});
