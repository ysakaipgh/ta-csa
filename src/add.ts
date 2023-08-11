import { rootHarfNote, rootHarfNoteNumber, rootNote, rootNoteNumber } from "./const";
import type ChordInfoDto from "./dto";
import { oraganizeIntoOneOctave } from "./utils";

/**
 * テンションコードの取得.
 *
 * @param {string} type コード（和音）の種類
 * @returns {string | null} テンションコード
 */
export function getTensionChord(type: string) {
  if (type.indexOf("(") !== -1 && type.indexOf(")") !== -1) {
    return (type.split("(")[1] ?? ")").split(")")[0];
  }
  return null;
}

/**
 * テンションコードを追加.
 *
 * @param {number[]} resultArray 音の位置を示す配列
 * @param {string} tensionChord テンションコード
 * @returns {number[]} 音の位置を示す配列
 */
export function addTensionChord(resultArray: number[], tensionChord: string) {
  const tcdFirstChar = tensionChord.slice(0, 1);
  let soundAdjustment = 0;
  let tensionChordNumber = "";
  if (tcdFirstChar === "b") {
    soundAdjustment = -1;
    tensionChordNumber = tensionChord.slice(1, 1 + tensionChord.length - 1);
  } else if (tcdFirstChar === "#") {
    soundAdjustment = 1;
    tensionChordNumber = tensionChord.slice(1, 1 + tensionChord.length - 1);
  } else {
    tensionChordNumber = tensionChord;
  }
  // 1オクターブ分の度数 7 + 配列index分 1 を引く
  const tcn = Number(tensionChordNumber) - 8;
  if (tcn > 0) {
    // テンションコードの5音目を足すパターン
    resultArray.push((
      rootNoteNumber[tcn] ?? 0
    ) + (
      resultArray[0] ?? 0
    ) + 11 + soundAdjustment);
  }
  return resultArray;
}

/**
 * 分散コードを追加.
 *
 * @param {number[]} resultArray 音の位置を示す配列
 * @param {ChordInfoDto} analysisChord コード分析用オブジェクト
 * @returns {number[]} 音の位置を示す配列
 */
export function addSlashChord(resultArray: number[], analysisChord: ChordInfoDto) {
  const onChordStr = analysisChord.rootNotes[1];
  const onChordChar = onChordStr?.slice(0, 1);
  const onChordIndex = rootNote.indexOf(onChordChar ?? "");
  // 基準の位置
  const onChordNumber: number = (onChordStr?.length === 1
    ? rootNoteNumber[onChordIndex]
    : rootHarfNoteNumber[rootHarfNote.indexOf(onChordStr ?? "")]) ?? -1;
  const returnArray: number[] = [];
  const diffArray = oraganizeIntoOneOctave(resultArray);
  // 最初に分散コードを追加する
  returnArray.push(onChordNumber < (resultArray[0] ?? 12)
    ? onChordNumber + 12
    : onChordNumber);
  // 残りのコードを追加する
  resultArray.forEach((n) => {
    let isAdd = false;
    if (diffArray.includes(onChordNumber)) {
      // 転回形
      if (n !== returnArray[0]) {
        // 転回形は、分散コードに一致しない音だけを追加する。
        isAdd = true;
      }
    } else {
      // 転回形ではない場合、一致する音が無いので、すべて追加する。
      isAdd = true;
    }
    if (isAdd) {
      returnArray.push((returnArray[0] ?? 12) < n
        ? n // 分散コードより大きい数字はそのまま追加
        : n + 12 // 分散コードより小さい数字は、1オクターブ上げる
      );
    }
  });
  return returnArray.sort((a, b) => a - b);
}
