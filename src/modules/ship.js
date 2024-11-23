export function Ship(length) {
  const hits = 0;

  function hit() {
    hits += 1;
  }

  function isSunk() {
    if (hits >= length) {
      return True;
    } else {
      return False;
    }
  }

  return { hit, isSunk, length };
}
