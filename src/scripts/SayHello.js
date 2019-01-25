const sayHello = function({ name, capitalize = false }) {
    if (capitalize) {
        name = name.toUpperCase();
    }

    console.log(`Hello ${name}!`);
};

module.exports = sayHello;
