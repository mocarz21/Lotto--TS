import inquirer from 'inquirer';

const chosenNumbers: number[]=[];
const randomNumbers: number[]=[];

const  startApp = async (): Promise<void> => {
    const result = await inquirer.prompt([{
        name:'number',
        type: 'input',
        message: 'podaj liczbę ..'
    }]);
    do {
        const result = await inquirer.prompt([{
            name: 'number',
            type: 'input',
            message: 'Podaj liczbę...'
        }]);
    
        if (validateInput(result.number)) {
            chosenNumbers.push(parseInt(result.number));
        }
    } while (chosenNumbers.length < 6);
};

const validateInput = (input: string): boolean => {

    const number = parseInt(input);
    if(isNaN(number)){
        console.log('podaj lczbe');
        return false;
    }

    if(number < 1 || number > 49){
        console.log('zły zakres');
        return false;
    }
    if(chosenNumbers.includes(number)){
        console.log('jest taki');
        return false;
    }

    return true;
};


const randomNewNumber = (): number => {
    return Math.floor(Math.random() * 49) + 1;
};

const validateRandomNumber = (number: number): boolean => {
    if (randomNumbers.includes(number)) {
        return false;
    }
    return true;
};

const countSameNumbers = (): number => {
    let count = 0;
    for (let i = 0; i < 6; i++) {
        if (chosenNumbers.includes(randomNumbers[i])) {
            count++;
        }
    }
    return count;
};

const printResult = (): void => {
    console.log(`masz ${countSameNumbers()}`);
};

startApp();