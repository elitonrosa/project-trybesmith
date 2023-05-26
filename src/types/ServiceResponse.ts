export type ServiceResponseError = {
  status: 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'INVALID_USER',
  data: { message: string },
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL',
  data: T,
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;