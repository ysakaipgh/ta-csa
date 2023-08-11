// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: セブンス
import { ChordController } from "../src/main";

test("chord four C7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C7");
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(8);
  expect(resultArray[3]).toBe(11);
});

test("chord four C#7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C#7");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(12);
});

test("chord four Db7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Db7");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(12);
});

test("chord four D7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D7");
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(10);
  expect(resultArray[3]).toBe(13);
});

test("chord four D#7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D#7");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(14);
});

test("chord four Eb7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Eb7");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(14);
});

test("chord four E7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("E7");
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(12);
  expect(resultArray[3]).toBe(15);
});

test("chord four F7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F7");
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(13);
  expect(resultArray[3]).toBe(16);
});

test("chord four F#7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F#7");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(17);
});

test("chord four Gb7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gb7");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(17);
});

test("chord four G7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G7");
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(15);
  expect(resultArray[3]).toBe(18);
});

test("chord four G#7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G#7");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(19);
});

test("chord four Ab7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Ab7");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(19);
});

test("chord four A7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A7");
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(17);
  expect(resultArray[3]).toBe(20);
});

test("chord four A#7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A#7");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(21);
});

test("chord four Bb7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bb7");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(21);
});

test("chord four B7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("B7");
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(16);
  expect(resultArray[2]).toBe(19);
  expect(resultArray[3]).toBe(22);
});
