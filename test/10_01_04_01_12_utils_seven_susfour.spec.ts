// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: セブンス・サス・フォー
import { ChordController } from "../src/main";

test("chord four C7sus4", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C7sus4");
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(8);
  expect(resultArray[3]).toBe(11);
});

test("chord four C#7sus4", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C#7sus4");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(12);
});

test("chord four Db7sus4", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Db7sus4");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(12);
});

test("chord four D7sus4", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D7sus4");
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(10);
  expect(resultArray[3]).toBe(13);
});

test("chord four D#7sus4", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D#7sus4");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(14);
});

test("chord four Eb7sus4", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Eb7sus4");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(14);
});

test("chord four E7sus4", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("E7sus4");
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(12);
  expect(resultArray[3]).toBe(15);
});

test("chord four F7sus4", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F7sus4");
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(13);
  expect(resultArray[3]).toBe(16);
});

test("chord four F#7sus4", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F#7sus4");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(17);
});

test("chord four Gb7sus4", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gb7sus4");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(17);
});

test("chord four G7sus4", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G7sus4");
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(15);
  expect(resultArray[3]).toBe(18);
});

test("chord four G#7sus4", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G#7sus4");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(19);
});

test("chord four Ab7sus4", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Ab7sus4");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(19);
});

test("chord four A7sus4", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A7sus4");
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(17);
  expect(resultArray[3]).toBe(20);
});

test("chord four A#7sus4", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A#7sus4");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(16);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(21);
});

test("chord four Bb7sus4", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bb7sus4");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(16);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(21);
});

test("chord four B7sus4", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("B7sus4");
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(17);
  expect(resultArray[2]).toBe(19);
  expect(resultArray[3]).toBe(22);
});
