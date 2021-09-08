document.querySelector('#ingresar').onclick = function() {
    const $inputAnnualSalary = Number(document.querySelector('#ingresar-salario').value) || '';
    const $monthlySalary = calculateMonthlySalary($inputAnnualSalary)
    let noSalaryInput;
    if ($inputAnnualSalary === '') {
        noSalaryInput = 'No seas oligarca y pone cuanto ganas!'
    } else {
        noSalaryInput = 'Esa plata nos pertenece a todes!'
    }
    document.querySelector('#salario-mensual').value = $monthlySalary;
    document.querySelector('#resultado').innerText = noSalaryInput;
    return false;
};

function calculateMonthlySalary(number) {
    return number / 12;
};