// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: シックス
import { ChordController } from "../src/main";

test("chord four C6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C6");
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(8);
  expect(resultArray[3]).toBe(10);
});

test("chord four C#6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C#6");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(11);
});

test("chord four Db6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Db6");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(11);
});

test("chord four D6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D6");
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(10);
  expect(resultArray[3]).toBe(12);
});

test("chord four D#6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D#6");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(13);
});

test("chord four Eb6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Eb6");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(13);
});

test("chord four E6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("E6");
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(12);
  expect(resultArray[3]).toBe(14);
});

test("chord four F6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F6");
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(13);
  expect(resultArray[3]).toBe(15);
});

test("chord four F#6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F#6");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(16);
});

test("chord four Gb6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gb6");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(16);
});

test("chord four G6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G6");
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(15);
  expect(resultArray[3]).toBe(17);
});

test("chord four G#6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G#6");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(18);
});

test("chord four Ab6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Ab6");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(18);
});

test("chord four A6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A6");
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(17);
  expect(resultArray[3]).toBe(19);
});

test("chord four A#6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A#6");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(20);
});

test("chord four Bb6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bb6");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(20);
});

test("chord four B6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("B6");
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(16);
  expect(resultArray[2]).toBe(19);
  expect(resultArray[3]).toBe(21);
});
