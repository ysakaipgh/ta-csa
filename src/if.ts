declare interface ChordInfoInterface {
  chord: string;
  rootNotes: string[];
  types: string[];
  baseStr: string;
  baseChar: string;
  baseIndex: number;
  // 基準となる度数
  basefrequency: number;
  // 基準の位置
  baseNumber: number;
  // コード（和音）の種類
  type: string;
  isMinor: boolean;
}

export default ChordInfoInterface;
