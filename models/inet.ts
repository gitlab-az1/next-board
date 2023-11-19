import os from 'node:os';
import type { NextApiRequest } from 'next';
import { Exception } from 'typesdk/errors';


export function localIP(): IPv4 {
  const netifaces = os.networkInterfaces();
  let ip: string = '0.0.0.0';

  for(const iname in netifaces) {
    if(iname === 'lo') continue;
    if(ip !== '0.0.0.0') break;
    
    for(const i of (netifaces[iname] || [])) {
      if(i.internal) continue;
      if(i.family !== 'IPv4') continue;

      ip = i.address;
      break;
    }
  }

  return new IPv4(ip);
}

export function extractFromRequest(request: NextApiRequest): IPv4 {
  let realIp;

  if(request instanceof Request) {
    realIp =
          request.headers.get('cf-connecting-ip') ||
          request.headers.get('x-real-ip') ||
          (request as any).socket?.remoteAddress ||
          '127.0.0.1';
  } else {
    realIp =
          request.headers['cf-connecting-ip'] ||
          request.headers['x-real-ip'] ||
          request.socket?.remoteAddress ||
          '127.0.0.1';
  }

  // Localhost loopback in IPv6
  if(realIp === '::1') {
    realIp = '127.0.0.1';
  }

  // IPv4-mapped IPv6 addresses
  if(realIp.substr(0, 7) == '::ffff:') {
    realIp = realIp.substr(7);
  }

  return new IPv4(realIp);
}


export class IPv4 {
  #address: string;

  constructor(value?: any) {
    this.#address = '';

    if(value instanceof IPv4) {
      this.#address = value.address;
    }

    if(Array.isArray(value)) {
      this.update(value);
    }

    if(typeof value === 'string') {
      this.update(value.split('.').map(item => parseInt(item, 10)));
    }
  }

  get address(): string {
    return this.#address;
  }
  
  public update(octets: number[]): void {
    if(octets.length !== 4) {
      throw new Exception('Invalid IPv4 octets', { cause: 'invalid octet count' });
    }

    for(const octet of octets) {
      if(octet < 0 || octet > 255) {
        throw new Exception('Invalid IPv4 octet', { cause: 'invalid octet range [0, 255]' });
      }
    }

    this.#address = octets.join('.');
  }

  public setAddress(value: string): void {
    if(typeof value !== 'string') return;
    this.update(value.split('.').map(item => parseInt(item, 10)));
  }

  public getOctets(): number[] {
    return this.#address.split('.').map(item => parseInt(item, 10));
  }
}


export class IPv6 {
  #address: string;

  constructor(value?: any) {
    this.#address = '';

    if(value instanceof IPv6) {
      this.#address = value.address;
    }

    if(Array.isArray(value)) {
      this.update(value);
    }

    if(typeof value === 'string') {
      this.update(value.split(':').map(item => parseInt(item, 16)));
    }
  }

  get address(): string {
    return this.#address;
  }

  public update(octets: (number | string)[]): void {
    if(octets.length !== 8) {
      throw new Exception('Invalid IPv6 octets', { cause: 'invalid octet count' });
    }

    for(const octet of octets) {
      if(typeof octet === 'string') {
        if(octet.length !== 4) {
          throw new Exception('Invalid IPv6 octet', { cause: 'invalid octet length' });
        }

        if(!/^[0-9a-fA-F]+$/.test(octet)) {
          throw new Exception('Invalid IPv6 octet', { cause: 'invalid octet format' });
        }
      } else {
        if(octet < 0 || octet > 65535) {
          throw new Exception('Invalid IPv6 octet', { cause: 'invalid octet range [0, 65535]' });
        }
      }
    }

    this.#address = octets.map(item => {
      if(typeof item === 'string') return item;
      return item.toString(16).padStart(4, '0');
    }).join(':');
  }

  public setAddress(value: string): void {
    if(typeof value !== 'string') return;
    this.update(value.split(':').map(item => parseInt(item, 16)));
  }

  public getOctets(): string[] {
    return this.#address.split(':');
  }
}


const _default = Object.freeze({
  IPv4,
  IPv6,
  localIP,
  extractFromRequest,
});

export default _default;