// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: アドナインス
import { ChordController } from "../src/main";

test("chord four Cadd9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Cadd9");
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(8);
  expect(resultArray[3]).toBe(15);
});

test("chord four C#add9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C#add9");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(16);
});

test("chord four Dbadd9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Dbadd9");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(16);
});

test("chord four Dadd9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Dadd9");
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(10);
  expect(resultArray[3]).toBe(17);
});

test("chord four D#add9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D#add9");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(18);
});

test("chord four Ebadd9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Ebadd9");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(18);
});

test("chord four Eadd9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Eadd9");
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(12);
  expect(resultArray[3]).toBe(19);
});

test("chord four Fadd9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Fadd9");
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(13);
  expect(resultArray[3]).toBe(20);
});

test("chord four F#add9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F#add9");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(21);
});

test("chord four Gbadd9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gbadd9");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(21);
});

test("chord four Gadd9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gadd9");
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(15);
  expect(resultArray[3]).toBe(22);
});

test("chord four G#add9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G#add9");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(23);
});

test("chord four Abadd9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Abadd9");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(23);
});

test("chord four Aadd9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Aadd9");
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(17);
  expect(resultArray[3]).toBe(24);
});

test("chord four A#add9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A#add9");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(25);
});

test("chord four Bbadd9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bbadd9");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(25);
});

test("chord four Badd9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Badd9");
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(16);
  expect(resultArray[2]).toBe(19);
  expect(resultArray[3]).toBe(26);
});
