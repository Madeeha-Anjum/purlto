import { generateSlugWithNum } from "../../../src/utils/slug.util";

const maxSlugNumber = 456975;

test("slug with number 0 should be aaaa", () => {
  expect(generateSlugWithNum(0)).toBe("aaaa");
});

test("slug with number 1 should be aaab", () => {
  expect(generateSlugWithNum(1)).toBe("aaab");
});

test("slug with number 3 should be aaad", () => {
  expect(generateSlugWithNum(3)).toBe("aaad");
});

test("slug with number max number - 1 should be zzzy", () => {
  expect(generateSlugWithNum(maxSlugNumber - 1)).toBe("zzzy");
});

test("slug with number max number should be zzzz", () => {
  expect(generateSlugWithNum(maxSlugNumber)).toBe("zzzz");
});

test("slug with number max number + 1 should throw an error", () => {
  expect(() => {
    generateSlugWithNum(maxSlugNumber + 1);
  }).toThrow();
});
