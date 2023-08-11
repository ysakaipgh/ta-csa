// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: マイナー・メジャー・セブンス
import { ChordController } from "../src/main";

test("chord four CmM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("CmM7");
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(4);
  expect(resultArray[2]).toBe(8);
  expect(resultArray[3]).toBe(12);
});

test("chord four C#mM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C#mM7");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(13);
});

test("chord four DbmM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("DbmM7");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(13);
});

test("chord four DmM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("DmM7");
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(10);
  expect(resultArray[3]).toBe(14);
});

test("chord four D#mM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D#mM7");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(15);
});

test("chord four EbmM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("EbmM7");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(15);
});

test("chord four EmM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("EmM7");
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(12);
  expect(resultArray[3]).toBe(16);
});

test("chord four FmM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("FmM7");
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(13);
  expect(resultArray[3]).toBe(17);
});

test("chord four F#mM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F#mM7");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(18);
});

test("chord four GbmM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("GbmM7");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(18);
});

test("chord four GmM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("GmM7");
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(15);
  expect(resultArray[3]).toBe(19);
});

test("chord four G#mM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G#mM7");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(20);
});

test("chord four AbmM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("AbmM7");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(20);
});

test("chord four AmM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("AmM7");
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(17);
  expect(resultArray[3]).toBe(21);
});

test("chord four A#mM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A#mM7");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(22);
});

test("chord four BbmM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("BbmM7");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(22);
});

test("chord four BmM7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("BmM7");
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(19);
  expect(resultArray[3]).toBe(23);
});
