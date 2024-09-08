'use strict';

/**
 * Вычисление НОД нескольких натуральных чисел
 * @param {number} numbers - натуральные числа
 * @returns {number} - НОД натуральных чисел из numbers
 */
const euclid = (...numbers) => {
    if (numbers.length === 0) {
        throw new Error("empty data");
    }
    return numbers.reduce(
        (a, b) => {
            if (typeof a != 'number' || a < 0) {
                throw new Error('not a natural number');
            }
            if (b === 0) {
                return a;
            }
            return euclid(b, a % b);
        }
    )
}
