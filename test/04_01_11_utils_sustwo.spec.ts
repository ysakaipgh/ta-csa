// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: サス・ツー
import ChordInfoDto from "../src/dto";
import { additionalChord, createBaseChord } from "../src/base";
import { soundAdjustment } from "../src/utils";

test("chord three Csus2", function () {
  const analysisChord = new ChordInfoDto("Csus2");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(3);
  expect(resultArray[2]).toBe(8);
});

test("chord three C#sus2", function () {
  const analysisChord = new ChordInfoDto("C#sus2");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(4);
  expect(resultArray[2]).toBe(9);
});

test("chord three Dbsus2", function () {
  const analysisChord = new ChordInfoDto("Dbsus2");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(4);
  expect(resultArray[2]).toBe(9);
});

test("chord three Dsus2", function () {
  const analysisChord = new ChordInfoDto("Dsus2");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(10);
});

test("chord three D#sus2", function () {
  const analysisChord = new ChordInfoDto("D#sus2");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(11);
});

test("chord three Ebsus2", function () {
  const analysisChord = new ChordInfoDto("Ebsus2");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(11);
});

test("chord three Esus2", function () {
  const analysisChord = new ChordInfoDto("Esus2");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(12);
});

test("chord three Fsus2", function () {
  const analysisChord = new ChordInfoDto("Fsus2");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(13);
});

test("chord three F#sus2", function () {
  const analysisChord = new ChordInfoDto("F#sus2");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(14);
});

test("chord three Gbsus2", function () {
  const analysisChord = new ChordInfoDto("Gbsus2");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(14);
});

test("chord three Gsus2", function () {
  const analysisChord = new ChordInfoDto("Gsus2");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(15);
});

test("chord three G#sus2", function () {
  const analysisChord = new ChordInfoDto("G#sus2");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(16);
});

test("chord three Absus2", function () {
  const analysisChord = new ChordInfoDto("Absus2");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(16);
});

test("chord three Asus2", function () {
  const analysisChord = new ChordInfoDto("Asus2");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(17);
});

test("chord three A#sus2", function () {
  const analysisChord = new ChordInfoDto("A#sus2");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(18);
});

test("chord three Bbsus2", function () {
  const analysisChord = new ChordInfoDto("Bbsus2");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(18);
});

test("chord three Bsus2", function () {
  const analysisChord = new ChordInfoDto("Bsus2");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  let resultArray: number[] = [];
  resultArray = createBaseChord(resultArray, analysisChord);
  resultArray = additionalChord(resultArray, analysisChord);
  resultArray = soundAdjustment(resultArray, analysisChord);
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(19);
});
