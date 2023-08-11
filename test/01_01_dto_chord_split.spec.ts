import ChordInfoDto from "../src/dto";

test('chord split Ebm7/Gb', function () {
  const analysisChord = new ChordInfoDto("Ebm7/Gb");
  analysisChord.splitChord();
  expect(analysisChord.rootNotes[0]).toBe("Eb");
  expect(analysisChord.rootNotes[1]).toBe("Gb");
  expect(analysisChord.types[0]).toBe("m7");
  expect(analysisChord.types[1]).toBe("");
});

test('chord split Absus4/Gb', function () {
  const analysisChord = new ChordInfoDto("Absus4/Gb");
  analysisChord.splitChord();
  expect(analysisChord.rootNotes[0]).toBe("Ab");
  expect(analysisChord.rootNotes[1]).toBe("Gb");
  expect(analysisChord.types[0]).toBe("sus4");
  expect(analysisChord.types[1]).toBe("");
});

test('chord split Eb7(b9)/G', function () {
  const analysisChord = new ChordInfoDto("Eb7(b9)/G");
  analysisChord.splitChord();
  expect(analysisChord.rootNotes[0]).toBe("Eb");
  expect(analysisChord.rootNotes[1]).toBe("G");
  expect(analysisChord.types[0]).toBe("7(b9)");
  expect(analysisChord.types[1]).toBe("");
});

test('chord split one A', function () {
  const analysisChord = new ChordInfoDto("A");
  analysisChord.splitChord();
  expect(analysisChord.rootNotes[0]).toBe("A");
  expect(analysisChord.rootNotes[1]).toBe(undefined);
  expect(analysisChord.types[0]).toBe("");
  expect(analysisChord.types[1]).toBe(undefined);
});

test('chord split none', function () {
  const analysisChord = new ChordInfoDto("N");
  analysisChord.splitChord();
  expect(analysisChord.rootNotes[0]).toBe("N");
  expect(analysisChord.rootNotes[1]).toBe(undefined);
  expect(analysisChord.types[0]).toBe(undefined);
  expect(analysisChord.types[1]).toBe(undefined);
});

test('chord split empty', function () {
  const analysisChord = new ChordInfoDto("");
  analysisChord.splitChord();
  expect(analysisChord.rootNotes[0]).toBe("");
  expect(analysisChord.rootNotes[1]).toBe(undefined);
  expect(analysisChord.types[0]).toBe(undefined);
  expect(analysisChord.types[1]).toBe(undefined);
});
