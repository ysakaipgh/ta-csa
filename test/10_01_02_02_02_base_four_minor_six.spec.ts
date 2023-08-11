// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: マイナー・シックス
import { ChordController } from "../src/main";

test("chord four Cm6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Cm6");
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(4);
  expect(resultArray[2]).toBe(8);
  expect(resultArray[3]).toBe(10);
});

test("chord four C#m6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C#m6");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(11);
});

test("chord four Dbm6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Dbm6");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(11);
});

test("chord four Dm6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Dm6");
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(10);
  expect(resultArray[3]).toBe(12);
});

test("chord four D#m6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D#m6");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(13);
});

test("chord four Ebm6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Ebm6");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(13);
});

test("chord four Em6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Em6");
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(12);
  expect(resultArray[3]).toBe(14);
});

test("chord four Fm6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Fm6");
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(13);
  expect(resultArray[3]).toBe(15);
});

test("chord four F#m6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F#m6");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(16);
});

test("chord four Gbm6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gbm6");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(16);
});

test("chord four Gm6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gm6");
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(15);
  expect(resultArray[3]).toBe(17);
});

test("chord four G#m6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G#m6");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(18);
});

test("chord four Abm6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Abm6");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(18);
});

test("chord four Am6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Am6");
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(17);
  expect(resultArray[3]).toBe(19);
});

test("chord four A#m6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A#m6");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(20);
});

test("chord four Bbm6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bbm6");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(20);
});

test("chord four Bm6", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bm6");
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(19);
  expect(resultArray[3]).toBe(21);
});
