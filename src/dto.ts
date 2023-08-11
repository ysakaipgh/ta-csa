import { rootNote, frequency, rootNoteNumber, rootHarfNote, rootHarfNoteNumber, onChoad } from "./const";
import type ChordInfoInterface from "./if";

export default class ChordInfoDto implements ChordInfoInterface {
  chord = "";
  rootNotes: string[] = [];
  types: string[] = [];
  baseStr = "";
  baseChar = "";
  baseIndex = -1;
  // 基準となる度数
  basefrequency = -1;
  // 基準の位置
  baseNumber = -1;
  // コード（和音）の種類
  type = "";
  isMinor = false;
  constructor(chord: string) {
    this.chord = chord;
  }

  /**
   * コードの分解を行う.
   *
   * @returns {void} 返却値なし
   */
  splitChord() {
    const splitChord = this.chord.split(onChoad);
    splitChord.forEach(c => {
      const tmpBaseChordOne = c.slice(0, 1);
      const tmpBaseChordTwo = c.slice(0, 2);
      if (rootHarfNote.indexOf(tmpBaseChordTwo) !== -1) {
        this.rootNotes.push(tmpBaseChordTwo);
        this.types.push(c.slice(2, 2 + c.length));
      } else if (rootNote.indexOf(tmpBaseChordOne) !== -1) {
        this.rootNotes.push(tmpBaseChordOne);
        this.types.push(c.slice(1, 1 + c.length));
      } else {
        // N がここに来るはず
        this.rootNotes.push(c);
      }
    });
  }

  /**
   * 基準となる情報を作成.
   *
   * @returns {void} 返却値なし
   */
  createBaseInfo() {
    this.baseStr = this.rootNotes[0] ?? "";
    this.baseChar = this.baseStr.slice(0, 1);
    this.baseIndex = rootNote.indexOf(this.baseChar);
    // 基準となる度数
    this.basefrequency = frequency[this.baseIndex] ?? -1;
    // 基準の位置
    this.baseNumber = this.baseStr.length === 1
      ? rootNoteNumber[this.baseIndex] ?? -1
      : rootHarfNoteNumber[rootHarfNote.indexOf(this.baseStr)] ?? -1;

    // コード（和音）の種類
    this.type = this.types[0] ?? "";
    this.isMinor = this.type.slice(0, 1) === "m";
  }
}
