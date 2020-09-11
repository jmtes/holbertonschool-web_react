import immutable from 'immutable';

const { Map, setIn } = immutable;

export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas'
});

export const map2 = setIn(setIn(map, ['2'], 'Benjamin'), ['4'], 'Oliver');
