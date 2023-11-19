import type { ErrorRejectionObject } from '@types';
import { Exception } from 'typesdk/errors';
import type { Dict } from 'typesdk/types';


export function assertPublicErrorObject(obj: Dict<any>): asserts obj is ErrorRejectionObject {
  if(typeof obj !== 'object') {
    throw new Exception();
  }

  if(typeof obj.cause !== 'string') {
    throw new Exception();
  }

  if(typeof obj.action !== 'string') {
    throw new Exception();
  }

  if(typeof obj.status !== 'number' && typeof obj.status !== 'string') {
    throw new Exception();
  }

  if(typeof obj.message !== 'string') {
    throw new Exception();
  }

  if(typeof obj.errorCode !== 'string') {
    throw new Exception();
  }
}


export function validateJSON(value: unknown): boolean {
  try {
    JSON.parse(value as string);
    return true;
  } catch {
    return false;
  }
}