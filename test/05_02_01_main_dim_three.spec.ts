// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: ディミニッシュトライアド
import { ChordController } from "../src/main";

test("chord dim Cdim", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Cdim");
  expect(resultArray.length).toBe(3);
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(4);
  expect(resultArray[2]).toBe(7);
});

test("chord dim C#dim", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C#dim");
  expect(resultArray.length).toBe(3);
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(8);
});

test("chord dim Dbdim", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Dbdim");
  expect(resultArray.length).toBe(3);
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(8);
});

test("chord dim Ddim", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Ddim");
  expect(resultArray.length).toBe(3);
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(9);
});

test("chord dim D#dim", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D#dim");
  expect(resultArray.length).toBe(3);
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(10);
});

test("chord dim Ebdim", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Ebdim");
  expect(resultArray.length).toBe(3);
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(10);
});

test("chord dim Edim", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Edim");
  expect(resultArray.length).toBe(3);
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(11);
});

test("chord dim Fdim", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Fdim");
  expect(resultArray.length).toBe(3);
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(12);
});

test("chord dim F#dim", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F#dim");
  expect(resultArray.length).toBe(3);
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(13);
});

test("chord dim Gbdim", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gbdim");
  expect(resultArray.length).toBe(3);
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(13);
});

test("chord dim Gdim", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gdim");
  expect(resultArray.length).toBe(3);
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(14);
});

test("chord dim G#dim", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G#dim");
  expect(resultArray.length).toBe(3);
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(15);
});

test("chord dim Abdim", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Abdim");
  expect(resultArray.length).toBe(3);
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(15);
});

test("chord dim Adim", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Adim");
  expect(resultArray.length).toBe(3);
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(16);
});

test("chord dim A#dim", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A#dim");
  expect(resultArray.length).toBe(3);
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(17);
});

test("chord dim Bbdim", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bbdim");
  expect(resultArray.length).toBe(3);
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(17);
});

test("chord dim Bdim", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bdim");
  expect(resultArray.length).toBe(3);
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(18);
});
