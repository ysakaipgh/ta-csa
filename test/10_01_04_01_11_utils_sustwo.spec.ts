// https://www.shinko-music.co.jp/reading_score_piano/p-3-1/
// テスト: サス・ツー
import { ChordController } from "../src/main";

test("chord three Csus2", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Csus2");
  expect(resultArray[0]).toBe(1);
  expect(resultArray[1]).toBe(3);
  expect(resultArray[2]).toBe(8);
});

test("chord three C#sus2", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("C#sus2");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(4);
  expect(resultArray[2]).toBe(9);
});

test("chord three Dbsus2", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Dbsus2");
  expect(resultArray[0]).toBe(2);
  expect(resultArray[1]).toBe(4);
  expect(resultArray[2]).toBe(9);
});

test("chord three Dsus2", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Dsus2");
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(5);
  expect(resultArray[2]).toBe(10);
});

test("chord three D#sus2", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("D#sus2");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(11);
});

test("chord three Ebsus2", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Ebsus2");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(11);
});

test("chord three Esus2", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Esus2");
  expect(resultArray[0]).toBe(5);
  expect(resultArray[1]).toBe(7);
  expect(resultArray[2]).toBe(12);
});

test("chord three Fsus2", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Fsus2");
  expect(resultArray[0]).toBe(6);
  expect(resultArray[1]).toBe(8);
  expect(resultArray[2]).toBe(13);
});

test("chord three F#sus2", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("F#sus2");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(14);
});

test("chord three Gbsus2", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gbsus2");
  expect(resultArray[0]).toBe(7);
  expect(resultArray[1]).toBe(9);
  expect(resultArray[2]).toBe(14);
});

test("chord three Gsus2", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Gsus2");
  expect(resultArray[0]).toBe(8);
  expect(resultArray[1]).toBe(10);
  expect(resultArray[2]).toBe(15);
});

test("chord three G#sus2", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("G#sus2");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(16);
});

test("chord three Absus2", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Absus2");
  expect(resultArray[0]).toBe(9);
  expect(resultArray[1]).toBe(11);
  expect(resultArray[2]).toBe(16);
});

test("chord three Asus2", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Asus2");
  expect(resultArray[0]).toBe(10);
  expect(resultArray[1]).toBe(12);
  expect(resultArray[2]).toBe(17);
});

test("chord three A#sus2", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("A#sus2");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(18);
});

test("chord three Bbsus2", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bbsus2");
  expect(resultArray[0]).toBe(11);
  expect(resultArray[1]).toBe(13);
  expect(resultArray[2]).toBe(18);
});

test("chord three Bsus2", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.analysisChord("Bsus2");
  expect(resultArray[0]).toBe(12);
  expect(resultArray[1]).toBe(14);
  expect(resultArray[2]).toBe(19);
});
