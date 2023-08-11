// テスト: 1オクターブに収まる数値化した配列
import { ChordController } from "../src/main";

test("on chord not turning system Am7/G", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.getOctaveChord("Am7/G");
  expect(resultArray[0]).toBe(1); // C
  expect(resultArray[1]).toBe(5); // E
  expect(resultArray[2]).toBe(8); // G
  expect(resultArray[3]).toBe(10); // A
});

test("chord four Ebadd9", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.getOctaveChord("Ebadd9");
  expect(resultArray[0]).toBe(4);
  expect(resultArray[1]).toBe(6);
  expect(resultArray[2]).toBe(8);
  expect(resultArray[3]).toBe(11);
});

test("chord five GM7(b13)", function () {
  const chordCtrl = new ChordController();
  const resultArray = chordCtrl.getOctaveChord("GM7(b13)");
  expect(resultArray[0]).toBe(3);
  expect(resultArray[1]).toBe(4);
  expect(resultArray[2]).toBe(7);
  expect(resultArray[3]).toBe(8);
  expect(resultArray[4]).toBe(12);
});
