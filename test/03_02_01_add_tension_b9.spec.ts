// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: セブンス / テンションコード（♭9）
import ChordInfoDto from "../src/dto";
import { additionalChord, createBaseChord } from "../src/base";
import { getTensionChord, addTensionChord } from "../src/add";

test("chord five C7(b9)", function () {
  const analysisChord = new ChordInfoDto("C7(b9)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type) ?? "";
  resultArray = addTensionChord(resultArray, tensionChord);
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(8);
  expect(resultArray[3]).toBe(11);
  expect(resultArray[4]).toBe(14);
});

test("chord five C#7(b9)", function () {
  const analysisChord = new ChordInfoDto("C#7(b9)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type) ?? "";
  resultArray = addTensionChord(resultArray, tensionChord);
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(12);
  expect(resultArray[4]).toBe(15);
});

test("chord five Db7(b9)", function () {
  const analysisChord = new ChordInfoDto("Db7(b9)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type) ?? "";
  resultArray = addTensionChord(resultArray, tensionChord);
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(12);
  expect(resultArray[4]).toBe(15);
});

test("chord five D7(b9)", function () {
  const analysisChord = new ChordInfoDto("D7(b9)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type) ?? "";
  resultArray = addTensionChord(resultArray, tensionChord);
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(10);
  expect(resultArray[3]).toBe(13);
  expect(resultArray[4]).toBe(16);
});

test("chord five D#7(b9)", function () {
  const analysisChord = new ChordInfoDto("D#7(b9)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type) ?? "";
  resultArray = addTensionChord(resultArray, tensionChord);
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(14);
  expect(resultArray[4]).toBe(17);
});

test("chord five Eb7(b9)", function () {
  const analysisChord = new ChordInfoDto("Eb7(b9)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type) ?? "";
  resultArray = addTensionChord(resultArray, tensionChord);
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(14);
  expect(resultArray[4]).toBe(17);
});

test("chord five E7(b9)", function () {
  const analysisChord = new ChordInfoDto("E7(b9)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type) ?? "";
  resultArray = addTensionChord(resultArray, tensionChord);
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(12);
  expect(resultArray[3]).toBe(15);
  expect(resultArray[4]).toBe(18);
});

test("chord five F7(b9)", function () {
  const analysisChord = new ChordInfoDto("F7(b9)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type) ?? "";
  resultArray = addTensionChord(resultArray, tensionChord);
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(13);
  expect(resultArray[3]).toBe(16);
  expect(resultArray[4]).toBe(19);
});

test("chord five F#7(b9)", function () {
  const analysisChord = new ChordInfoDto("F#7(b9)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type) ?? "";
  resultArray = addTensionChord(resultArray, tensionChord);
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(17);
  expect(resultArray[4]).toBe(20);
});

test("chord five Gb7(b9)", function () {
  const analysisChord = new ChordInfoDto("Gb7(b9)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type) ?? "";
  resultArray = addTensionChord(resultArray, tensionChord);
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(17);
  expect(resultArray[4]).toBe(20);
});

test("chord five G7(b9)", function () {
  const analysisChord = new ChordInfoDto("G7(b9)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type) ?? "";
  resultArray = addTensionChord(resultArray, tensionChord);
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(15);
  expect(resultArray[3]).toBe(18);
  expect(resultArray[4]).toBe(21);
});

test("chord five G#7(b9)", function () {
  const analysisChord = new ChordInfoDto("G#7(b9)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type) ?? "";
  resultArray = addTensionChord(resultArray, tensionChord);
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(19);
  expect(resultArray[4]).toBe(22);
});

test("chord five Ab7(b9)", function () {
  const analysisChord = new ChordInfoDto("Ab7(b9)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type) ?? "";
  resultArray = addTensionChord(resultArray, tensionChord);
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(19);
  expect(resultArray[4]).toBe(22);
});

test("chord five A7(b9)", function () {
  const analysisChord = new ChordInfoDto("A7(b9)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type) ?? "";
  resultArray = addTensionChord(resultArray, tensionChord);
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(17);
  expect(resultArray[3]).toBe(20);
  expect(resultArray[4]).toBe(23);
});

test("chord five A#7(b9)", function () {
  const analysisChord = new ChordInfoDto("A#7(b9)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type) ?? "";
  resultArray = addTensionChord(resultArray, tensionChord);
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(21);
  expect(resultArray[4]).toBe(24);
});

test("chord five Bb7(b9)", function () {
  const analysisChord = new ChordInfoDto("Bb7(b9)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type) ?? "";
  resultArray = addTensionChord(resultArray, tensionChord);
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(21);
  expect(resultArray[4]).toBe(24);
});

test("chord five B7(b9)", function () {
  const analysisChord = new ChordInfoDto("B7(b9)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type) ?? "";
  resultArray = addTensionChord(resultArray, tensionChord);
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(16);
  expect(resultArray[2]).toBe(19);
  expect(resultArray[3]).toBe(22);
  expect(resultArray[4]).toBe(25);
});
