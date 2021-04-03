import { unique } from "../src/index";

describe("@dsdash/array/unique", () => {
  it("unique number[]", () => {
    const array = [1, 2, 2, 2, 3];
    const uniquedArray = unique(array);
    expect(uniquedArray).toEqual([1, 2, 3]);
  });
});
