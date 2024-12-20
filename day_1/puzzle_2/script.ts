import { getInput } from "../../utils/getInput.ts";

const input = getInput(1, 2);

function solve(input: string) {
  const locations = new Map<
    string,
    { id: number; left: number; right: number }
  >();

  const lines = input.split("\n");

  for (const line of lines) {
    const [lKey, rKey] = line.split("   ");

    const lLocation = locations.get(lKey) ?? location(lKey);
    const rLocation = locations.get(rKey) ?? location(rKey);

    lLocation.left++;
    rLocation.right++;

    locations.set(lKey, lLocation).set(rKey, rLocation);
  }

  let similarity = 0;

  for (const location of locations.values()) {
    similarity += location.id * location.left * location.right;
  }

  return similarity;
}

function location(id: string) {
  return { id: +id, left: 0, right: 0 };
}

console.log(solve(input)); // 19097157
