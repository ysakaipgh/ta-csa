// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: ナインス
import { ChordController } from "../src/main";

test("chord three C9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C9");
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(3);
  expect(resultArray[2]).toBe(8);
});

test("chord three C#9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C#9");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(4);
  expect(resultArray[2]).toBe(9);
});

test("chord three Db9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Db9");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(4);
  expect(resultArray[2]).toBe(9);
});

test("chord three D9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D9");
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(10);
});

test("chord three D#9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D#9");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(11);
});

test("chord three Eb9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Eb9");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(11);
});

test("chord three E9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("E9");
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(12);
});

test("chord three F9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F9");
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(13);
});

test("chord three F#9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F#9");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(14);
});

test("chord three Gb9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gb9");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(14);
});

test("chord three G9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G9");
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(15);
});

test("chord three G#9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G#9");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(16);
});

test("chord three Ab9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Ab9");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(16);
});

test("chord three A9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A9");
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(17);
});

test("chord three A#9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A#9");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(18);
});

test("chord three Bb9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bb9");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(18);
});

test("chord three B9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("B9");
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(19);
});
