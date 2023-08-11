import { debugResultLog } from "../src/utils";

test('debug log normal', function () {
  const actual = debugResultLog("C", "C", "", [1, 5, 8]);
  const expected = "C | C |  [ 1,5,8 | ド(1), ミ(5), ソ(8), ]";
  expect(actual).toBe(expected);
});

// EM7 | E | M7 [ 5,9,12,16 | ミ(5), ラ♭(9), シ(12), ミ♭(16), ]
// C F G、以外は2音目のドレミファソラシドが#付きになるので、以下が正解
// EM7 | E | M7 [ 5,9,12,16 | ミ(5), ソ#(9), シ(12), レ#(16), ]

test('debug log over', function () {
  const actual = debugResultLog("EM7", "E", "M7", [5, 9, 12, 16]);
  const expected = "EM7 | E | M7 [ 5,9,12,16 | ミ(5), ソ#(9), シ(12), レ#(16), ]";
  expect(actual).toBe(expected);
});

// AbM7 | Ab | M7 [ 9,13,16,20 | ド(1), ミ♭(4), ソ(8), ラ♭(9), ]
// コードとしては、↓の方が判りやすいので、デバッグ出力の内容を変更する。
// AbM7 | Ab | M7 [ 9,13,16,20 | ラ♭(9), ド(13), ミ♭(16), ソ(20), ]

test('debug log over', function () {
  const actual = debugResultLog("AbM7", "Ab", "M7", [9, 13, 16, 20]);
  const expected = "AbM7 | Ab | M7 [ 9,13,16,20 | ラ♭(9), ド(13), ミ♭(16), ソ(20), ]";
  expect(actual).toBe(expected);
});

test('debug log a suitable string', function () {
  const actual = debugResultLog("a", "c", "d", [1, 2]);
  const expected = "a | c | d [ 1,2 | ド(1), ド#(2), ]";
  expect(actual).toBe(expected);
});

test('debug log empty', function () {
  const actual = debugResultLog("", "", "", []);
  const expected = " |  |  [  | ]";
  expect(actual).toBe(expected);
});

// 引数の null, undefined は typescript として定義できないので、気にしなくて良い
