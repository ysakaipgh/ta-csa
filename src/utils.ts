import { scaleNameFlat, scaleNameSharp } from "./const";
import type ChordInfoDto from "./dto";

/**
 * 音の位置を調整.
 *
 * @param {number[]} resultArray 音の位置を示す配列
 * @param {ChordInfoDto} analysisChord コード分析用オブジェクト
 * @returns {number[]} 音の位置を示す配列
 */
export function soundAdjustment(resultArray: number[], analysisChord: ChordInfoDto) {
  if (analysisChord.type.indexOf("b5") !== -1 || analysisChord.type.indexOf("-5") !== -1) {
    // マイナー・セブン フラット・ファイブ、dim7の別表記である、m6(b5)、を含め5度（3番目の音）を半音下げる
    resultArray[2] = (resultArray[2] ?? 0) - 1;
  } else if (analysisChord.type.indexOf("aug") !== -1) {
    // オーギュメントは、5度（3番目の音）を半音上げる
    resultArray[2] = (resultArray[2] ?? 0) + 1;
  }

  if (analysisChord.type.indexOf("sus2") !== -1) {
    // サス・ツーは、3度（2番目の音）を1度下げる
    resultArray[1] = (resultArray[1] ?? 0) - 2;
  } else if (analysisChord.type.indexOf("sus4") !== -1) {
    // サス・フォーは、3度（2番目の音）を半音上げる
    resultArray[1] = (resultArray[1] ?? 0) + 1;
  }
  return resultArray;
}

/**
 * 1オクターブに収まるように調整.
 *
 * @param {number[]} arr 音の位置を示す配列
 * @returns {number[]} 音の位置を示す配列
 */
export function oraganizeIntoOneOctave(arr: number[]) {
  const result: number[] = [];
  arr.forEach(o => {
    while (o > 12) {
      o = (o > 12)
        ? o - 12
        : o;
    }
    while (o < 1) {
      o = (o < 1)
        ? o + 12
        : o;
    }
    if (!result.includes(o)) {
      result.push(o);
    }
  });
  return result.sort((a, b) => a - b);
}

/**
 * デバッグ出力用の関数.
 *
 * @param {string} chord コードの文字列
 * @param {string} baseStr 基準となる文字列
 * @param {string} type コード（和音）の種類
 * @param {number[]} resultArray 音の位置を示す配列
 * @returns {void} 返却値なし
 */
export function debugResultLog(chord: string, baseStr: string, type: string, resultArray: number[]) {
  let debugStr = `${chord} | ${baseStr} | ${type} [ ${resultArray.toString()} | `;

  const scaleNameArr = (baseStr.length === 2 && baseStr.slice(1, 2) === "#")
    ? scaleNameSharp
    : (baseStr.length === 1 && ["C", "F", "G"].indexOf(baseStr) === -1)
      ? scaleNameSharp
      : scaleNameFlat;
  resultArray.forEach((o) => {
    const rn = oraganizeIntoOneOctave([o]);
    const i = (rn[0] ?? 0) - 1;
    debugStr += `${scaleNameArr[i] ?? ""}(${o}), `;
  });
  debugStr += "]";

  console.log(debugStr);

  return debugStr;
}
