import { hyphenate } from './strings';

it.each([
  ['İlkin Artuç', 'i̇lkin-artuç'],
  ['Urša Gorše', 'urša-gorše'],
  ['Pontus Lögdahl', 'pontus-lögdahl'],
  ['Nejc Palir', 'nejc-palir'],
  ['', ''],
  [undefined, ''],
  [{}, ''],
])('%p should return %p', (value, expected) => {
  const result = hyphenate(value);
  expect(result).toStrictEqual(expected);
});
