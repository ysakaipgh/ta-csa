import ChordInfoDto from "../src/dto";

test('chord createBaseInfo Ebm7/Gb', function () {
  const analysisChord = new ChordInfoDto("Ebm7/Gb");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  expect(analysisChord.rootNotes[0]).toBe("Eb");
  expect(analysisChord.rootNotes[1]).toBe("Gb");
  expect(analysisChord.types[0]).toBe("m7");
  expect(analysisChord.types[1]).toBe("");
  expect(analysisChord.baseStr).toBe("Eb");
  expect(analysisChord.baseChar).toBe("E");
  expect(analysisChord.basefrequency).toBe(3);
  expect(analysisChord.baseNumber).toBe(4);
  expect(analysisChord.type).toBe("m7");
  expect(analysisChord.isMinor).toBe(true);
});

test('chord createBaseInfo Absus4/Gb', function () {
  const analysisChord = new ChordInfoDto("Absus4/Gb");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  expect(analysisChord.rootNotes[0]).toBe("Ab");
  expect(analysisChord.rootNotes[1]).toBe("Gb");
  expect(analysisChord.types[0]).toBe("sus4");
  expect(analysisChord.types[1]).toBe("");
  expect(analysisChord.baseStr).toBe("Ab");
  expect(analysisChord.baseChar).toBe("A");
  expect(analysisChord.basefrequency).toBe(6);
  expect(analysisChord.baseNumber).toBe(9);
  expect(analysisChord.type).toBe("sus4");
  expect(analysisChord.isMinor).toBe(false);
});

test('chord createBaseInfo Eb7(b9)/G', function () {
  const analysisChord = new ChordInfoDto("Eb7(b9)/G");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  expect(analysisChord.rootNotes[0]).toBe("Eb");
  expect(analysisChord.rootNotes[1]).toBe("G");
  expect(analysisChord.types[0]).toBe("7(b9)");
  expect(analysisChord.types[1]).toBe("");
  expect(analysisChord.baseStr).toBe("Eb");
  expect(analysisChord.baseChar).toBe("E");
  expect(analysisChord.basefrequency).toBe(3);
  expect(analysisChord.baseNumber).toBe(4);
  expect(analysisChord.type).toBe("7(b9)");
  expect(analysisChord.isMinor).toBe(false);
});

test('chord createBaseInfo none', function () {
  const analysisChord = new ChordInfoDto("N");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  expect(analysisChord.rootNotes[0]).toBe("N");
  expect(analysisChord.rootNotes[1]).toBe(undefined);
  expect(analysisChord.types[0]).toBe(undefined);
  expect(analysisChord.types[1]).toBe(undefined);
  expect(analysisChord.baseStr).toBe("N");
  expect(analysisChord.baseChar).toBe("N");
  expect(analysisChord.basefrequency).toBe(-1);
  expect(analysisChord.baseNumber).toBe(-1);
  expect(analysisChord.type).toBe("");
  expect(analysisChord.isMinor).toBe(false);
});

test('chord createBaseInfo empty', function () {
  const analysisChord = new ChordInfoDto("");
  analysisChord.splitChord();
  analysisChord.createBaseInfo();
  expect(analysisChord.rootNotes[0]).toBe("");
  expect(analysisChord.rootNotes[1]).toBe(undefined);
  expect(analysisChord.types[0]).toBe(undefined);
  expect(analysisChord.types[1]).toBe(undefined);
  expect(analysisChord.baseStr).toBe("");
  expect(analysisChord.baseChar).toBe("");
  expect(analysisChord.basefrequency).toBe(-1);
  expect(analysisChord.baseNumber).toBe(-1);
  expect(analysisChord.type).toBe("");
  expect(analysisChord.isMinor).toBe(false);
});
