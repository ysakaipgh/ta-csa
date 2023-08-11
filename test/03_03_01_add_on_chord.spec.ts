// https://sakkyoku.info/theory/slash-chord/
// テスト: 分散コード
import ChordInfoDto from "../src/dto";
import { createBaseChord } from "../src/base";
import { addSlashChord } from "../src/add";

// ================================================================================
// 転回形
test("on chord turning system C/E", function () {
  const analysisChord = new ChordInfoDto("C/E");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = addSlashChord(resultArray, analysisChord);
  expect(resultArray[0]).toBe(5); // E
  expect(resultArray[1]).toBe(8); // G
  expect(resultArray[2]).toBe(13); // C
});

test("on chord turning system G/B", function () {
  const analysisChord = new ChordInfoDto("G/B");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = addSlashChord(resultArray, analysisChord);
  expect(resultArray[0]).toBe(12); // B
  expect(resultArray[1]).toBe(15); // D
  expect(resultArray[2]).toBe(20); // G
});

test("on chord turning system D/F#", function () {
  const analysisChord = new ChordInfoDto("D/F#");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = addSlashChord(resultArray, analysisChord);
  expect(resultArray[0]).toBe(7); // F#
  expect(resultArray[1]).toBe(10); // A
  expect(resultArray[2]).toBe(15); // D
});

test("on chord turning system A/C#", function () {
  const analysisChord = new ChordInfoDto("A/C#");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = addSlashChord(resultArray, analysisChord);
  expect(resultArray[0]).toBe(14); // C#
  expect(resultArray[1]).toBe(17); // F
  expect(resultArray[2]).toBe(22); // A
});

test("on chord turning system E/G#", function () {
  const analysisChord = new ChordInfoDto("E/G#");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = addSlashChord(resultArray, analysisChord);
  expect(resultArray[0]).toBe(9); // G#
  expect(resultArray[1]).toBe(12); // B
  expect(resultArray[2]).toBe(17); // E
});

test("on chord turning system F/A", function () {
  const analysisChord = new ChordInfoDto("F/A");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = addSlashChord(resultArray, analysisChord);
  expect(resultArray[0]).toBe(10); // A
  expect(resultArray[1]).toBe(13); // C
  expect(resultArray[2]).toBe(18); // F
});

test("on chord turning system Bb/D", function () {
  const analysisChord = new ChordInfoDto("Bb/D");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = addSlashChord(resultArray, analysisChord);
  expect(resultArray[0]).toBe(15); // D
  expect(resultArray[1]).toBe(18); // F
  expect(resultArray[2]).toBe(23); // Bb
});

test("on chord turning system Em/B", function () {
  const analysisChord = new ChordInfoDto("Em/B");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = addSlashChord(resultArray, analysisChord);
  expect(resultArray[0]).toBe(12); // B
  expect(resultArray[1]).toBe(17); // E
  expect(resultArray[2]).toBe(20); // G
});

// ================================================================================
// 転回形にならない分数コード
test("on chord not turning system G/C", function () {
  const analysisChord = new ChordInfoDto("G/C");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = addSlashChord(resultArray, analysisChord);
  expect(resultArray[0]).toBe(13); // C
  expect(resultArray[1]).toBe(15); // D
  expect(resultArray[2]).toBe(20); // G
  expect(resultArray[3]).toBe(24); // B
});

test("on chord not turning system Am/G", function () {
  const analysisChord = new ChordInfoDto("Am/G");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = addSlashChord(resultArray, analysisChord);
  expect(resultArray[0]).toBe(20); // G
  expect(resultArray[1]).toBe(22); // A
  expect(resultArray[2]).toBe(25); // C
  expect(resultArray[3]).toBe(29); // E
});

// Am/G は転回形ではないが、 Am7 の転回形(Am7/G)と一致する
test("on chord not turning system Am7/G", function () {
  const analysisChord = new ChordInfoDto("Am7/G");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = addSlashChord(resultArray, analysisChord);
  expect(resultArray[0]).toBe(20); // G
  expect(resultArray[1]).toBe(22); // A
  expect(resultArray[2]).toBe(25); // C
  expect(resultArray[3]).toBe(29); // E
});
