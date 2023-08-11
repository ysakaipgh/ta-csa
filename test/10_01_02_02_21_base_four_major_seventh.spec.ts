// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: メジャー・セブンス
import { ChordController } from "../src/main";

test("chord four CM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("CM7");
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(8);
  expect(resultArray[3]).toBe(12);
});

test("chord four C#M7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C#M7");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(13);
});

test("chord four DbM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("DbM7");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(13);
});

test("chord four DM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("DM7");
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(10);
  expect(resultArray[3]).toBe(14);
});

test("chord four D#M7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D#M7");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(15);
});

test("chord four EbM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("EbM7");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(15);
});

test("chord four EM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("EM7");
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(12);
  expect(resultArray[3]).toBe(16);
});

test("chord four FM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("FM7");
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(13);
  expect(resultArray[3]).toBe(17);
});

test("chord four F#M7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F#M7");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(18);
});

test("chord four GbM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("GbM7");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(18);
});

test("chord four GM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("GM7");
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(15);
  expect(resultArray[3]).toBe(19);
});

test("chord four G#M7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G#M7");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(20);
});

test("chord four AbM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("AbM7");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(20);
});

test("chord four AM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("AM7");
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(17);
  expect(resultArray[3]).toBe(21);
});

test("chord four A#M7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A#M7");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(22);
});

test("chord four BbM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("BbM7");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(22);
});

test("chord four BM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("BM7");
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(16);
  expect(resultArray[2]).toBe(19);
  expect(resultArray[3]).toBe(23);
});
