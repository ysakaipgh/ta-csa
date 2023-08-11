// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: オーギュメント
import { ChordController } from "../src/main";

test("chord three Caug", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Caug");
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(9);
});

test("chord three C#aug", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C#aug");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(10);
});

test("chord three Dbaug", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Dbaug");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(10);
});

test("chord three Daug", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Daug");
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(11);
});

test("chord three D#aug", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D#aug");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(12);
});

test("chord three Ebaug", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Ebaug");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(12);
});

test("chord three Eaug", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Eaug");
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(13);
});

test("chord three Faug", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Faug");
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(14);
});

test("chord three F#aug", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F#aug");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(15);
});

test("chord three Gbaug", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gbaug");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(15);
});

test("chord three Gaug", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gaug");
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(16);
});

test("chord three G#aug", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G#aug");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(17);
});

test("chord three Abaug", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Abaug");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(17);
});

test("chord three Aaug", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Aaug");
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(18);
});

test("chord three A#aug", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A#aug");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(19);
});

test("chord three Bbaug", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bbaug");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(15);
  expect(resultArray[2]).toBe(19);
});

test("chord three Baug", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Baug");
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(16);
  expect(resultArray[2]).toBe(20);
});
