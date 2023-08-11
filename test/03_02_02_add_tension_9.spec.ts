// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: メジャー・セブンス / テンションコード（9）
import ChordInfoDto from "../src/dto";
import { additionalChord, createBaseChord } from "../src/base";
import { getTensionChord, addTensionChord } from "../src/add";

test("chord five CM7(9)", function () {
  const analysisChord = new ChordInfoDto("CM7(9)");
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
  expect(resultArray[3]).toBe(12);
  expect(resultArray[4]).toBe(15);
});

test("chord five C#M7(9)", function () {
  const analysisChord = new ChordInfoDto("C#M7(9)");
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
  expect(resultArray[3]).toBe(13);
  expect(resultArray[4]).toBe(16);
});

test("chord five DbM7(9)", function () {
  const analysisChord = new ChordInfoDto("DbM7(9)");
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
  expect(resultArray[3]).toBe(13);
  expect(resultArray[4]).toBe(16);
});

test("chord five DM7(9)", function () {
  const analysisChord = new ChordInfoDto("DM7(9)");
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
  expect(resultArray[3]).toBe(14);
  expect(resultArray[4]).toBe(17);
});

test("chord five D#M7(9)", function () {
  const analysisChord = new ChordInfoDto("D#M7(9)");
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
  expect(resultArray[3]).toBe(15);
  expect(resultArray[4]).toBe(18);
});

test("chord five EbM7(9)", function () {
  const analysisChord = new ChordInfoDto("EbM7(9)");
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
  expect(resultArray[3]).toBe(15);
  expect(resultArray[4]).toBe(18);
});

test("chord five EM7(9)", function () {
  const analysisChord = new ChordInfoDto("EM7(9)");
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
  expect(resultArray[3]).toBe(16);
  expect(resultArray[4]).toBe(19);
});

test("chord five FM7(9)", function () {
  const analysisChord = new ChordInfoDto("FM7(9)");
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
  expect(resultArray[3]).toBe(17);
  expect(resultArray[4]).toBe(20);
});

test("chord five F#M7(9)", function () {
  const analysisChord = new ChordInfoDto("F#M7(9)");
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
  expect(resultArray[3]).toBe(18);
  expect(resultArray[4]).toBe(21);
});

test("chord five GbM7(9)", function () {
  const analysisChord = new ChordInfoDto("GbM7(9)");
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
  expect(resultArray[3]).toBe(18);
  expect(resultArray[4]).toBe(21);
});

test("chord five GM7(9)", function () {
  const analysisChord = new ChordInfoDto("GM7(9)");
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
  expect(resultArray[3]).toBe(19);
  expect(resultArray[4]).toBe(22);
});

test("chord five G#M7(9)", function () {
  const analysisChord = new ChordInfoDto("G#M7(9)");
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
  expect(resultArray[3]).toBe(20);
  expect(resultArray[4]).toBe(23);
});

test("chord five AbM7(9)", function () {
  const analysisChord = new ChordInfoDto("AbM7(9)");
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
  expect(resultArray[3]).toBe(20);
  expect(resultArray[4]).toBe(23);
});

test("chord five AM7(9)", function () {
  const analysisChord = new ChordInfoDto("AM7(9)");
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
  expect(resultArray[3]).toBe(21);
  expect(resultArray[4]).toBe(24);
});

test("chord five A#M7(9)", function () {
  const analysisChord = new ChordInfoDto("A#M7(9)");
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
  expect(resultArray[3]).toBe(22);
  expect(resultArray[4]).toBe(25);
});

test("chord five BbM7(9)", function () {
  const analysisChord = new ChordInfoDto("BbM7(9)");
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
  expect(resultArray[3]).toBe(22);
  expect(resultArray[4]).toBe(25);
});

test("chord five BM7(9)", function () {
  const analysisChord = new ChordInfoDto("BM7(9)");
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
  expect(resultArray[3]).toBe(23);
  expect(resultArray[4]).toBe(26);
});
