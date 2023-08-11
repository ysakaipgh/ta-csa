// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: メジャー
import { ChordController } from "../src/main";

test("chord three C", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C");
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(8);
});

test("chord three C#", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C#");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(9);
});

test("chord three Db", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Db");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(9);
});

test("chord three D", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D");
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(10);
});

test("chord three D#", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D#");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(11);
});

test("chord three Eb", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Eb");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(11);
});

test("chord three E", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("E");
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(12);
});

test("chord three F", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F");
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(13);
});

test("chord three F#", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F#");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(14);
});

test("chord three Gb", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gb");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(14);
});

test("chord three G", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G");
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(15);
});

test("chord three G#", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G#");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(16);
});

test("chord three Ab", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Ab");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(16);
});

test("chord three A", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A");
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(17);
});

test("chord three A#", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A#");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(18);
});

test("chord three Bb", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bb");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(18);
});

test("chord three B", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("B");
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(16);
  expect(resultArray[2]).toBe(19);
});
