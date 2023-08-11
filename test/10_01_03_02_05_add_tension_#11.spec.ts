// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: メジャー・セブンス / テンションコード（#11）
import { ChordController } from "../src/main";

test("chord five CM7(#11)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("CM7(#11)");
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(8);
  expect(resultArray[3]).toBe(12);
  expect(resultArray[4]).toBe(19);
});

test("chord five C#M7(#11)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C#M7(#11)");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(13);
  expect(resultArray[4]).toBe(20);
});

test("chord five DbM7(#11)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("DbM7(#11)");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(13);
  expect(resultArray[4]).toBe(20);
});

test("chord five DM7(#11)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("DM7(#11)");
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(10);
  expect(resultArray[3]).toBe(14);
  expect(resultArray[4]).toBe(21);
});

test("chord five D#M7(#11)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D#M7(#11)");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(15);
  expect(resultArray[4]).toBe(22);
});

test("chord five EbM7(#11)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("EbM7(#11)");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(15);
  expect(resultArray[4]).toBe(22);
});

test("chord five EM7(#11)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("EM7(#11)");
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(12);
  expect(resultArray[3]).toBe(16);
  expect(resultArray[4]).toBe(23);
});

test("chord five FM7(#11)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("FM7(#11)");
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(13);
  expect(resultArray[3]).toBe(17);
  expect(resultArray[4]).toBe(24);
});

test("chord five F#M7(#11)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F#M7(#11)");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(18);
  expect(resultArray[4]).toBe(25);
});

test("chord five GbM7(#11)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("GbM7(#11)");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(18);
  expect(resultArray[4]).toBe(25);
});

test("chord five GM7(#11)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("GM7(#11)");
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(15);
  expect(resultArray[3]).toBe(19);
  expect(resultArray[4]).toBe(26);
});

test("chord five G#M7(#11)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G#M7(#11)");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(20);
  expect(resultArray[4]).toBe(27);
});

test("chord five AbM7(#11)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("AbM7(#11)");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(20);
  expect(resultArray[4]).toBe(27);
});

test("chord five AM7(#11)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("AM7(#11)");
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(17);
  expect(resultArray[3]).toBe(21);
  expect(resultArray[4]).toBe(28);
});

test("chord five A#M7(#11)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A#M7(#11)");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(22);
  expect(resultArray[4]).toBe(29);
});

test("chord five BbM7(#11)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("BbM7(#11)");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(22);
  expect(resultArray[4]).toBe(29);
});

test("chord five BM7(#11)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("BM7(#11)");
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(16);
  expect(resultArray[2]).toBe(19);
  expect(resultArray[3]).toBe(23);
  expect(resultArray[4]).toBe(30);
});
