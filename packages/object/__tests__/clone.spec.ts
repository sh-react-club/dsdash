import { deepClone } from "../src/index";

describe("deep copy", () => {
  it("same primitive", () => {
    expect(deepClone(null)).toEqual(null);
  });

  it("object recurve", () => {
    const origin = {
      x: { m: { a: "str", b: false }, n: [{ a: Symbol() }] },
      y: [1, true, "str"],
    };
    const modify = deepClone(origin);
    expect(modify).toEqual(origin);
    expect((modify as any).x).not.toBe(origin.x);
  });

  it("object is clone", () => {
    const obj = { person: { name: "zhangsan", age: 18 } };
    const modify = deepClone(obj);
    const new_modify = deepClone(obj);
    expect(modify).toEqual(new_modify);
  });
});
