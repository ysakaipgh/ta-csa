import { oraganizeIntoOneOctave } from "../src/utils";

test('normal 1 - 12', function () {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const actual = oraganizeIntoOneOctave(arr);
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  actual.forEach((o, i) => {
    expect(o).toBe(expected[i]);
  });
});

test('minus one 0 - 11', function () {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const actual = oraganizeIntoOneOctave(arr);
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  actual.forEach((o, i) => {
    expect(o).toBe(expected[i]);
  });
});

test('minus two -1 - 10', function () {
  const arr = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const actual = oraganizeIntoOneOctave(arr);
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  actual.forEach((o, i) => {
    expect(o).toBe(expected[i]);
  });
});

test('plus one 2 - 13', function () {
  const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const actual = oraganizeIntoOneOctave(arr);
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  actual.forEach((o, i) => {
    expect(o).toBe(expected[i]);
  });
});

test('outside the territory 0, 13', function () {
  const arr = [0, 13];
  const actual = oraganizeIntoOneOctave(arr);
  const expected = [1, 12];
  actual.forEach((o, i) => {
    expect(o).toBe(expected[i]);
  });
});

test('unique -1, 11, 23', function () {
  const arr = [-1, 11, 23];
  const actual = oraganizeIntoOneOctave(arr);
  const expected = [11];
  actual.forEach((o, i) => {
    expect(o).toBe(expected[i]);
  });
});

test('empty', function () {
  const arr: number[] = [];
  const actual = oraganizeIntoOneOctave(arr);
  const expected: number[] = [];
  actual.forEach((o, i) => {
    expect(o).toBe(expected[i]);
  });
});

// 引数の null, undefined は typescript として定義できないので、気にしなくて良い

// number は、 decimal も扱えるが、このプロジェクトでは出てこないので、単純にロジックとしての確認用コード
test('decimal 1', function () {
  const arr: number[] = [-1.1];
  const actual = oraganizeIntoOneOctave(arr);
  const expected: number[] = [10.9]; // -1.1 + 12 = 10.9
  actual.forEach((o, i) => {
    expect(o).toBe(expected[i]);
  });
});

test('decimal 2', function () {
  const arr: number[] = [13.1];
  const actual = oraganizeIntoOneOctave(arr);
  const expected: number[] = [1.1]; // 13.1 - 12 = 1.1
  // 1.0999999999999996 になって、エラーになる… javascript系の小数の扱い嫌い…
  // const expected: number[] = [1.0999999999999996]; // 13.1 - 12 = 1.1
  // 原因は10進数(人間が扱う数字)と2進数(コンピューターが扱う数字)の変換誤差
  // 参考記事： https://blog.apar.jp/program/8900/
  actual.forEach((o, i) => {
    // 仕方ないので、テスト結果を加工…
    expect(Math.ceil(o * Math.pow(10, 1)) / Math.pow(10, 1)).toBe(expected[i]);
  });
});

test('decimal demo', function () {
  // テストデータを用意
  const data = 13.1;
  // 12を引く
  const actual = data - 12;
  // 期待値は 13.1 - 12 = 1.1 なので、 1.1
  const expected = 1.1;
  // これは正しい？
  // console.log(actual === expected);
  // expect(actual).toBe(expected);
});
