import { Ship } from "../modules/ship";

test('New ship of length 5 has length 5', () => {
    const newShip = Ship(5)

    expect(newShip.length).toBe(5)
})

test('New ship takes hit and correctly updates hit attribute', () => {
    const newShip = Ship(3)
    newShip.hit()
    expect(newShip.getHits()).toBe(1)
})

test('New ship that gets hit its "length" number of times is sunk', () => {
    const newShip = Ship(3)
    newShip.hit()
    newShip.hit()
    newShip.hit()
    expect(newShip.isSunk()).toBe(true)
})