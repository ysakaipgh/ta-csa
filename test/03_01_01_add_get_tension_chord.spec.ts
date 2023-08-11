import { getTensionChord } from "../src/add";

test('normal', function () {
  const tensionChord = getTensionChord("C(9)");
  expect(tensionChord).toBe("9");
});

test('irregular front', function () {
  const tensionChord = getTensionChord("C(9");
  expect(tensionChord).toBe(null);
});

test('irregular rear', function () {
  const tensionChord = getTensionChord("C9)");
  expect(tensionChord).toBe(null);
});

test('irregular none', function () {
  const tensionChord = getTensionChord("C()");
  expect(tensionChord).toBe("");
});

// 引数の null, undefined は typescript として定義できないので、気にしなくて良い
