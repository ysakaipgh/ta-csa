// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: マイナー・セブンス
import { ChordController } from "../src/main";

test("chord four Cm7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Cm7");
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(4);
  expect(resultArray[2]).toBe(8);
  expect(resultArray[3]).toBe(11);
});

test("chord four C#m7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C#m7");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(12);
});

test("chord four Dbm7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Dbm7");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(12);
});

test("chord four Dm7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Dm7");
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(10);
  expect(resultArray[3]).toBe(13);
});

test("chord four D#m7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D#m7");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(14);
});

test("chord four Ebm7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Ebm7");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(14);
});

test("chord four Em7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Em7");
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(12);
  expect(resultArray[3]).toBe(15);
});

test("chord four Fm7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Fm7");
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(13);
  expect(resultArray[3]).toBe(16);
});

test("chord four F#m7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F#m7");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(17);
});

test("chord four Gbm7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gbm7");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(17);
});

test("chord four Gm7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gm7");
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(15);
  expect(resultArray[3]).toBe(18);
});

test("chord four G#m7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G#m7");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(19);
});

test("chord four Abm7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Abm7");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(19);
});

test("chord four Am7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Am7");
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(17);
  expect(resultArray[3]).toBe(20);
});

test("chord four A#m7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A#m7");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(21);
});

test("chord four Bbm7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bbm7");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(21);
});

test("chord four Bm7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bm7");
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(19);
  expect(resultArray[3]).toBe(22);
});
