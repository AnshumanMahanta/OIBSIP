document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('output');
    let currentInput = '';
    let previousAnswer = '';

    
    function updateOutput() {
        output.value = currentInput;
    }

    
    function handleButtonClick(event) {
        const buttonValue = event.target.textContent;

        switch (buttonValue) {
            case 'clear':
                currentInput = '';
                break;
            case 'del':
                currentInput = currentInput.slice(0, -1);
                break;
            case 'ans':
                currentInput += previousAnswer;
                break;
            case '=':
                try {
                    
                    const sanitizedInput = currentInput.replace(/×/g, '*').replace(/%/g, '/100*');
                    const result = eval(sanitizedInput);
                    previousAnswer = result.toString();
                    currentInput = result.toString();
                } catch (error) {
                    currentInput = 'Error';
                }
                break;
            case 'ac':
                currentInput = '';
                previousAnswer = '';
                break;
            case '±':
                if (currentInput) {
                    currentInput = currentInput.charAt(0) === '-' ? currentInput.slice(1) : '-' + currentInput;
                }
                break;
            case '√':
                try {
                    const result = Math.sqrt(eval(currentInput));
                    previousAnswer = result.toString();
                    currentInput = result.toString();
                } catch (error) {
                    currentInput = 'Error';
                }
                break;
            default:
                currentInput += buttonValue;
        }
        updateOutput();
    }

    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    
    updateOutput();
});
