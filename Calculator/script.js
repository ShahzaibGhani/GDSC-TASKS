const variables = {
    A: 0,
    B: 0,
    C: 0
};

const appendToExpression = (value) => {
    document.getElementById('expressionInput').value += value;
}

const clearExpression = () => {
    document.getElementById('expressionInput').value = '';
    document.getElementById('outputDisplay').innerText = '';
}

const evaluateExpression = () => {
    try {
        const expression = document.getElementById('expressionInput').value;
        const result = evaluate(expression);
        document.getElementById('expressionInput').value =result.toFixed(4);
    } catch (error) {
        document.getElementById('outputDisplay').innerText = 'Error: ' + error.message;
    }
}

const removeLastCharacter = () => {
    const currentExpression = document.getElementById('expressionInput').value;
    document.getElementById('expressionInput').value = currentExpression.slice(0, -1);
}

const evaluate = (expression) => {
    // Replace constants with their values
    expression = expression.replace(/pi/g, Math.PI.toString());
    expression = expression.replace(/e/g, Math.E.toString());

    // Replace variables with their values
    for (const variable in variables) {
        expression = expression.replace(new RegExp(variable, 'g'), variables[variable].toString());
    }

    // Replace functions with Math methods
    expression = expression.replace(/sin/g, 'Math.sin');
    expression = expression.replace(/cos/g, 'Math.cos');
    expression = expression.replace(/tan/g, 'Math.tan');
    expression = expression.replace(/sqrt/g, 'Math.sqrt');

    // Check for invalid characters
    const invalidChars = expression.match(/[^0-9+\-*/^().sqrtsinco tanABC]/g);
    if (invalidChars) {
        throw new Error('Invalid character(s) in expression: ' + invalidChars.join(', '));
    }

    // Use the eval function to evaluate the expression
    const result = eval(expression);

    // Check for divide by zero
    if (!Number.isFinite(result)) {
        throw new Error('Cannot divide by zero');
    }

    return result;
}
