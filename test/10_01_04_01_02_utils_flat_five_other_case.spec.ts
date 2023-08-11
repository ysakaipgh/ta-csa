// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: マイナー・セブン フラット・ファイブ
import ChordInfoDto from "../src/dto";
import { additionalChord, createBaseChord } from "../src/base";
import { addTensionChord, getTensionChord } from "../src/add";
import { soundAdjustment } from "../src/utils";

test("chord four Cm7(b5)", function () {
  const analysisChord = new ChordInfoDto("Cm7(b5)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type);
  resultArray = addTensionChord(resultArray, tensionChord ?? "b5");
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(4);
  expect(resultArray[2]).toBe(7);
  expect(resultArray[3]).toBe(11);
});

test("chord four Cm7(-5)", function () {
  const analysisChord = new ChordInfoDto("Cm7(-5)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type);
  resultArray = addTensionChord(resultArray, tensionChord ?? "b5");
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(4);
  expect(resultArray[2]).toBe(7);
  expect(resultArray[3]).toBe(11);
});

test("chord three Cm-5", function () {
  const analysisChord = new ChordInfoDto("Cm-5");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type);
  resultArray = addTensionChord(resultArray, tensionChord ?? "b5");
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(4);
  expect(resultArray[2]).toBe(7);
});

test("chord three Cm(-5)", function () {
  const analysisChord = new ChordInfoDto("Cm(-5)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type);
  resultArray = addTensionChord(resultArray, tensionChord ?? "b5");
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(4);
  expect(resultArray[2]).toBe(7);
});

test("chord three B(b5)", function () {
  const analysisChord = new ChordInfoDto("B(b5)");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type);
  resultArray = addTensionChord(resultArray, tensionChord ?? "b5");
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(16);
  expect(resultArray[2]).toBe(18);
});

test("chord three Bb5", function () {
  const analysisChord = new ChordInfoDto("Bb5");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type);
  resultArray = addTensionChord(resultArray, tensionChord ?? "b5");
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(18);
});

test("chord four DbM7b5", function () {
  const analysisChord = new ChordInfoDto("DbM7b5");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type);
  resultArray = addTensionChord(resultArray, tensionChord ?? "b5");
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(8);
  expect(resultArray[3]).toBe(13);
});

test("chord three Dbb5", function () {
  const analysisChord = new ChordInfoDto("Dbb5");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type);
  resultArray = addTensionChord(resultArray, tensionChord ?? "b5");
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(8);
});

test("chord three Dmb5", function () {
  const analysisChord = new ChordInfoDto("Dmb5");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  const tensionChord = getTensionChord(analysisChord.type);
  resultArray = addTensionChord(resultArray, tensionChord ?? "b5");
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(9);
});
