// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: ディミニッシュ
import { ChordController } from "../src/main";

test("chord dim Cdim7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Cdim7");
  expect(resultArray.length).toBe(4);
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(4);
  expect(resultArray[2]).toBe(7);
  expect(resultArray[3]).toBe(10);
});

test("chord dim C#dim7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C#dim7");
  expect(resultArray.length).toBe(4);
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(8);
  expect(resultArray[3]).toBe(11);
});

test("chord dim Dbdim7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Dbdim7");
  expect(resultArray.length).toBe(4);
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(8);
  expect(resultArray[3]).toBe(11);
});

test("chord dim Ddim7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Ddim7");
  expect(resultArray.length).toBe(4);
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(9);
  expect(resultArray[3]).toBe(12);
});

test("chord dim D#dim7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D#dim7");
  expect(resultArray.length).toBe(4);
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(10);
  expect(resultArray[3]).toBe(13);
});

test("chord dim Ebdim7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Ebdim7");
  expect(resultArray.length).toBe(4);
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(10);
  expect(resultArray[3]).toBe(13);
});

test("chord dim Edim7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Edim7");
  expect(resultArray.length).toBe(4);
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(11);
  expect(resultArray[3]).toBe(14);
});

test("chord dim Fdim7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Fdim7");
  expect(resultArray.length).toBe(4);
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(12);
  expect(resultArray[3]).toBe(15);
});

test("chord dim F#dim7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F#dim7");
  expect(resultArray.length).toBe(4);
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(13);
  expect(resultArray[3]).toBe(16);
});

test("chord dim Gbdim7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gbdim7");
  expect(resultArray.length).toBe(4);
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(13);
  expect(resultArray[3]).toBe(16);
});

test("chord dim Gdim7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gdim7");
  expect(resultArray.length).toBe(4);
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(14);
  expect(resultArray[3]).toBe(17);
});

test("chord dim G#dim7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G#dim7");
  expect(resultArray.length).toBe(4);
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(15);
  expect(resultArray[3]).toBe(18);
});

test("chord dim Abdim7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Abdim7");
  expect(resultArray.length).toBe(4);
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(15);
  expect(resultArray[3]).toBe(18);
});

test("chord dim Adim7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Adim7");
  expect(resultArray.length).toBe(4);
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(16);
  expect(resultArray[3]).toBe(19);
});

test("chord dim A#dim7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A#dim7");
  expect(resultArray.length).toBe(4);
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(17);
  expect(resultArray[3]).toBe(20);
});

test("chord dim Bbdim7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bbdim7");
  expect(resultArray.length).toBe(4);
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(17);
  expect(resultArray[3]).toBe(20);
});

test("chord dim Bdim7", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bdim7");
  expect(resultArray.length).toBe(4);
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(18);
  expect(resultArray[3]).toBe(21);
});
