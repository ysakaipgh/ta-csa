// https://sakkyoku.info/theory/slash-chord/
// テスト: 分散コード
import { ChordController } from "../src/main";

// ================================================================================
// 転回形
test("on chord turning system C/E", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C/E");
  expect(resultArray[0]).toBe(5); // E
  expect(resultArray[1]).toBe(8); // G
  expect(resultArray[2]).toBe(13); // C
});

test("on chord turning system G/B", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G/B");
  expect(resultArray[0]).toBe(12); // B
  expect(resultArray[1]).toBe(15); // D
  expect(resultArray[2]).toBe(20); // G
});

test("on chord turning system D/F#", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D/F#");
  expect(resultArray[0]).toBe(7); // F#
  expect(resultArray[1]).toBe(10); // A
  expect(resultArray[2]).toBe(15); // D
});

test("on chord turning system A/C#", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A/C#");
  expect(resultArray[0]).toBe(14); // C#
  expect(resultArray[1]).toBe(17); // F
  expect(resultArray[2]).toBe(22); // A
});

test("on chord turning system E/G#", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("E/G#");
  expect(resultArray[0]).toBe(9); // G#
  expect(resultArray[1]).toBe(12); // B
  expect(resultArray[2]).toBe(17); // E
});

test("on chord turning system F/A", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F/A");
  expect(resultArray[0]).toBe(10); // A
  expect(resultArray[1]).toBe(13); // C
  expect(resultArray[2]).toBe(18); // F
});

test("on chord turning system Bb/D", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bb/D");
  expect(resultArray[0]).toBe(15); // D
  expect(resultArray[1]).toBe(18); // F
  expect(resultArray[2]).toBe(23); // Bb
});

test("on chord turning system Em/B", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Em/B");
  expect(resultArray[0]).toBe(12); // B
  expect(resultArray[1]).toBe(17); // E
  expect(resultArray[2]).toBe(20); // G
});

// ================================================================================
// 転回形にならない分数コード
test("on chord not turning system G/C", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G/C");
  expect(resultArray[0]).toBe(13); // C
  expect(resultArray[1]).toBe(15); // D
  expect(resultArray[2]).toBe(20); // G
  expect(resultArray[3]).toBe(24); // B
});

test("on chord not turning system Am/G", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Am/G");
  expect(resultArray[0]).toBe(20); // G
  expect(resultArray[1]).toBe(22); // A
  expect(resultArray[2]).toBe(25); // C
  expect(resultArray[3]).toBe(29); // E
});

// Am/G は転回形ではないが、 Am7 の転回形(Am7/G)と一致する
test("on chord not turning system Am7/G", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Am7/G");
  expect(resultArray[0]).toBe(20); // G
  expect(resultArray[1]).toBe(22); // A
  expect(resultArray[2]).toBe(25); // C
  expect(resultArray[3]).toBe(29); // E
});
