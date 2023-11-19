import { type Dict } from 'typesdk/types';


export type TransformOptions = {
  strict?: boolean;
  alias?: Dict<string>;
  exclude?: Array<string>;
  values?: Dict<'string' | 'number' | 'boolean' | 'bigint'>;
}

export function transformObjectKeys<T extends Dict<unknown> | Array<Dict<unknown>> = Dict<unknown>>(obj: T, options?: TransformOptions): T extends [] ? Array<any> : Dict<any> {
  if(!options?.alias) return obj as unknown as any;
  const results: any = obj;

  if(Array.isArray(obj)) {
    for(const item of obj) {
      if(typeof item !== 'object') continue;
      results.push(transformObjectKeys(item, options));
    }
  } else if(typeof obj === 'object') {
    for(const prop in obj) {
      if(!Object.keys(options?.alias).includes(prop)) continue;
      if(options.exclude && options.exclude.includes(prop)) continue;

      const value = obj[prop];
      const alias = options?.alias[prop];

      (results as Dict<unknown>)[alias] = value;
    }
  }

  return results;
}


export function transformObjectValues<T extends Dict<unknown> | Array<Dict<unknown>> = Dict<unknown>>(obj: T, options?: TransformOptions): T extends [] ? Array<any> : Dict<any>  {
  if(!options?.values) return obj as unknown as any;
  const results: any = obj;

  if(Array.isArray(obj)) {
    for(const item of obj) {
      if(typeof item !== 'object') continue;
      results.push(transformObjectValues(item, options));
    }
  } else if (typeof obj === 'object') {
    for(const prop in obj) {
      if(options?.exclude && options.exclude.includes(prop)) continue;
      if(!Object.keys(options.values).includes(prop)) continue;

      const current = obj[prop];

      switch(options.values[prop]) {
        case 'boolean':
          (obj as Dict<any>)[prop] = options.strict ?
            current === 'true' :
            (current === 'true' || current === '1');
          break;
        case 'string':
          (obj as Dict<any>)[prop] = String(current);
          break;
        case 'number':
          (obj as Dict<any>)[prop] = Number(current);
          break;
        case 'bigint':
          (obj as Dict<any>)[prop] = BigInt(current as unknown as any);
          break;
      }
    }
  }

  return results;
}