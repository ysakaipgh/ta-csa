import type ChordInfoDto from "./dto";

/**
 * 基準となる三和音を作成
 *
 * @param {number[]} resultArray 音の位置を示す配列
 * @param {ChordInfoDto} analysisChord コード分析用オブジェクト
 * @returns {number[]} 音の位置を示す配列
 */
export function createBaseChord(resultArray: number[], analysisChord: ChordInfoDto) {
  resultArray[0] = analysisChord.baseNumber;
  let adjustNinthValueFirst = 0;
  let adjustNinthValueSecond = 0;
  if (
    analysisChord.type.slice(0, 1) === "9"
    || analysisChord.type.slice(0, 2) === "m9"
  ) {
    adjustNinthValueFirst = -2;
    adjustNinthValueSecond = 2;
  }
  resultArray[1] = resultArray[0] + (
    analysisChord.isMinor
      ? 3
      : 4
  ) + adjustNinthValueFirst;
  resultArray[2] = resultArray[1] + (
    analysisChord.isMinor
      ? 4
      : 3
  ) + adjustNinthValueSecond;
  return resultArray;
}

/**
 * 四和音目を追加.
 *
 * @param {number[]} resultArray 音の位置を示す配列
 * @param {ChordInfoDto} analysisChord コード分析用オブジェクト
 * @returns {number[]} 音の位置を示す配列
 */
export function additionalChord(resultArray: number[], analysisChord: ChordInfoDto) {
  const third = resultArray[2] ?? -1;
  if (analysisChord.type.indexOf("6") !== -1) {
    // シックスとマイナーシックスは、音の間隔を1にして追加
    resultArray[3] = third !== -1
      ? third + 2
      : -1;
  } else if (
    analysisChord.type.slice(0, 1) === "7"
    || analysisChord.type.slice(0, 2) === "m7"
  ) {
    // セブンスとマイナーセブンスは、音の間隔を2にして追加
    resultArray[3] = third !== -1
      ? third + 3
      : -1;
  } else if (analysisChord.type.indexOf("M7") !== -1) {
    // メジャーセブンスとマイナーメジャーセブンスは、音の間隔を3にして追加
    resultArray[3] = third !== -1
      ? third + 4
      : -1;
  } else if (analysisChord.type.indexOf("add9") !== -1) {
    // アドナインスは、三和音に直接9度の音を追加
    resultArray[3] = (resultArray[0] ?? 1) +(
      analysisChord.isMinor
        ? 0
        : 1
    ) + 1 + 12;
  }
  return resultArray;
}
