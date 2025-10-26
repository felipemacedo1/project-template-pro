/**
 * Project Template Pro
 * Main entry point for the project
 */

/**
 * Greet someone
 * @param {string} name - Person's name
 * @returns {string} Greeting message
 */
function greet(name) {
  return `Hello, ${name}!`;
}

/**
 * Add two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

module.exports = {
  greet,
  add,
};
