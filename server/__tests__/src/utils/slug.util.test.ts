import { generateSlugWithNum } from "../../../src/utils/slug.util";

test("slug with number 0 should be aaaaa", () => {
  expect(generateSlugWithNum(0)).toBe("aaaaa");
});

test("slug with number 1 should be aaaab", () => {
  expect(generateSlugWithNum(1)).toBe("aaaab");
});

test("slug with number 3 should be aaaad", () => {
  expect(generateSlugWithNum(3)).toBe("aaaad");
});

test("slug with number 11,881,374 should be zzzzy", () => {
  expect(generateSlugWithNum(11881374)).toBe("zzzzy");
});

test("slug with number 11,881,375 should be zzzzz", () => {
  expect(generateSlugWithNum(11881375)).toBe("zzzzz");
});

test("slug with number 11,881,376 should throw an error", () => {
  expect(() => {
    generateSlugWithNum(11881376);
  }).toThrow();
});
