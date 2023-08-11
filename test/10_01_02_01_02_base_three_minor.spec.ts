// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: マイナー
import { ChordController } from "../src/main";

test("chord three Cm", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Cm");
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(4);
  expect(resultArray[2]).toBe(8);
});

test("chord three C#m", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C#m");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(9);
});

test("chord three Dbm", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Dbm");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(9);
});

test("chord three Dm", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Dm");
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(10);
});

test("chord three D#m", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D#m");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(11);
});

test("chord three Ebm", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Ebm");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(11);
});

test("chord three Em", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Em");
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(12);
});

test("chord three Fm", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Fm");
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(13);
});

test("chord three F#m", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F#m");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(14);
});

test("chord three Gbm", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gbm");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(14);
});

test("chord three Gm", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gm");
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(15);
});

test("chord three G#m", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G#m");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(16);
});

test("chord three Abm", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Abm");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(16);
});

test("chord three Am", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Am");
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(17);
});

test("chord three A#m", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A#m");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(18);
});

test("chord three Bbm", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bbm");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(18);
});

test("chord three Bm", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bm");
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(19);
});
