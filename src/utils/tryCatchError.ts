// todo: add send the error to logging service like Sentry

type ErrorWithMessage = {
  message: string;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  if (typeof maybeError === 'string') return new Error(maybeError);

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
}

/**
 * Return correct try catch error message in any way
 * @param error can be Error, object, string or any possible value
 */
export default function tryCatchError(error: unknown) {
  return toErrorWithMessage(error).message;
}
