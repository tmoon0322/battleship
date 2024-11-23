import { Ship } from "../modules/ship";

test('New ship of length 5 has length 5', () => {
    const newShip = Ship(5)

    expect(newShip.length).toBe(5)
})