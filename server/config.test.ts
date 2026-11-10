import { describe, expect, it } from 'vitest';
import { parseFixedRooms } from './config';

describe('HABBLAUD_FIXED_ROOMS', () => {
  it('separa por ";" e quebra de linha, mantendo caminhos do Windows inteiros', () => {
    expect(parseFixedRooms('C:\\Users\\gabi\\oficina\\sala-comercial; C:\\Users\\gabi\\oficina\\sala-carreira\n/p/x')).toEqual([
      'C:\\Users\\gabi\\oficina\\sala-comercial',
      'C:\\Users\\gabi\\oficina\\sala-carreira',
      '/p/x',
    ]);
  });

  it('vazio, espaços e repetidos', () => {
    expect(parseFixedRooms(undefined)).toEqual([]);
    expect(parseFixedRooms(' ; ;')).toEqual([]);
    expect(parseFixedRooms('/a;/a')).toEqual(['/a']);
  });
});
