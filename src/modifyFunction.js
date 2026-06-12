/*
 ! Завдання: Розробка функції вищого порядку для модифікації поведінки іншої функції

 Створіть функцію вищого порядку (higher-order function) `modifyFunction`, яка приймає як аргументи функцію `originalFunc` та число `multiplier`.

 Функція `originalFunction` приймає один числовий аргумент і повертає квадрат цього числа (число, помножене на саме себе).

 `modifyFunction` повинна повертати нову функцію, яка при виклику з будь-яким числовим аргументом викликає передану функцію `originalFunc` з цим аргументом і множить отриманий результат на `multiplier`.

 Наприклад, якщо передана функція повертає квадрат вхідного аргументу, і `multiplier` дорівнює 3, 
 то повернута функція повинна повертати квадрат вхідного аргументу, помножений на 3.
*/

function originalFunction(num) {
  // code
}

function modifyFunction(originalFunc, multiplier) {
  // code
}

// Приклад використання
// const modifiedFunc = modifyFunction(originalFunction, 3)
// console.log('Original function output for 4:', originalFunction(4)) // Повинно вивести 16
// console.log('Modified function output for 4:', modifiedFunc(4)) // Повинно вивести 48 (16 * 3)

/*
 У цьому коді ми створюємо модифіковану версію функції `originalFunction` за допомогою `modifyFunction` з множником 3.
 Потім ми виводимо результати для обох функцій, коли вони викликаються з аргументом 4.

 `originalFunction(4)` повинно повернути 16 (4 * 4), а `modifiedFunc(4)` повинно повернути 48, оскільки 16 (результат переданої функції) множиться на 3 (множник у `modifyFunction`).
*/

export { originalFunction, modifyFunction }
