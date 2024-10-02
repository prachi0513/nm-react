import { sum } from "../sum";

test("sum function caluclate 2 numbers", () => {
  const ans = sum(5, 5);

  expect(ans).toBe(10);
});
