import ChordInfoDto from "./dto";
import { additionalChord, createBaseChord } from "./base";
import { addSlashChord, addTensionChord, getTensionChord } from "./add";
import { debugResultLog, oraganizeIntoOneOctave, soundAdjustment } from "./utils";

export class ChordController {
  isDebug;
  setIsDebug() {
    this.isDebug = true;
  }

  constructor() {
    this.isDebug = false;
  }

  /**
   * コードの文字列から、1オクターブに収まる数値化した配列を返却する.
   *
   * @param {string} chord コードの文字列
   * @returns {number[]} 返却値なし
   */
  getOctaveChord(chord: string) {
    let resultArray: number[] = [];

    const analysisChord: number[] = this.analysisChord(chord);

    resultArray = oraganizeIntoOneOctave(analysisChord);

    return resultArray;
  }

  /**
   * コードの文字列から、音の位置を示す配列を、数値化して返却する.
   *
   * @param {string} chord コードの文字列
   * @returns {number[]} 音の位置を示す配列
   */
  analysisChord(chord: string) {
    const analysisChord = new ChordInfoDto(chord);
    // コードの分解
    analysisChord.splitChord();

    let resultArray: number[] = [];
    analysisChord.baseStr = analysisChord.rootNotes[0] ?? "N";
    if (analysisChord.baseStr === "N") {
      // コードが無ければ返却
      return resultArray;
    }

    // 基準となる情報を作成
    analysisChord.createBaseInfo();

    if (analysisChord.type.indexOf("dim") !== -1) {
      resultArray[0] = analysisChord.baseNumber;
      // ディミニッシュ・トライアド（減三和音）は短3度を2回乗せる（＝2回目が減5度）
      let roopNum = 2;
      if (analysisChord.type.indexOf("dim7") !== -1) {
        // ディミニッシュ（四和音）は追加で、単3度を乗せる（＝減7度）
        roopNum = 3;
      }
      for (let i = 1; i <= roopNum; i++) {
        resultArray[i] = (resultArray[i - 1] ?? -1) + 3;
      }
    } else {
      // 基準となる三和音を作成
      resultArray = createBaseChord(resultArray, analysisChord);
      // 四和音目を追加
      resultArray = additionalChord(resultArray, analysisChord);

      const tensionChord = getTensionChord(analysisChord.type);
      if (tensionChord) {
        // テンションコードがあれば追加
        resultArray = addTensionChord(resultArray, tensionChord);
      }

      // 最後に、分散コードを足す
      if (analysisChord.rootNotes[1]) {
        resultArray = addSlashChord(resultArray, analysisChord);
      }

      // 音の追加が終わったら、音の位置を調整
      resultArray = soundAdjustment(resultArray, analysisChord);
    }

    if (this.isDebug === true) {
      debugResultLog(chord, analysisChord.baseStr, analysisChord.type, resultArray);
    }

    return resultArray;
  }

}
