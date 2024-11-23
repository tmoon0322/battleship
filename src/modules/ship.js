export function Ship(length) {
  let hits = 0;

  function hit() {
    hits++;
  }
  const getHits = () => {
    return hits;
  }

  function isSunk() {
    if (hits >= length) {
      return true;
    } else {
      return false;
    }
  }
  return { getHits, hit, isSunk, length };
}
