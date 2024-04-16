// tool tip trigger javascript code from bootstrap 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


//form validation and calculation of tax using jquery

$(document).ready(function () {
    const form = $('#form');

    form.on('submit', function (e) {
        
        e.preventDefault();

        // to verify if the form is valid or not so that NAN value could not be passed for calcuation of tax         
        const isValid =false;
        var result = Boolean(validateForm());

        if (result) {
            
            calculateTax();
        }
    });

    // Function to validate form inputs
    function validateForm() {
         isValid = true;

       
        // Function called to check if the input is a number or not
        checkInputIsNumber($('#grossIncome'));
        checkInputIsNumber($('#extraIncome'));
        checkInputIsNumber($('#deduction'));


        // Check if Age Group is selected
        const ageGroup = $('#ageGroup').val();
        if (ageGroup === '') {
            $('#ageGroup').addClass('is-invalid');
            $('#ageGroup').tooltip({
                title: 'Please choose a valid option for Age Group',
                placement: 'right',
                trigger: 'hover',
            });
            isValid = false;
        }

        return isValid;
    }

    // Function to calculate tax
    function calculateTax() {

        const grossIncome = parseFloat($('#grossIncome').val());
        const extraIncome = parseFloat($('#extraIncome').val());
        const deduction = parseFloat($('#deduction').val());
        const ageGroup = $('#ageGroup').val();
        const ageGroupText = $('#ageGroup option:selected').text();

        
        let overallIncome = grossIncome + extraIncome - deduction;

        // Determine tax slab based on age
        let taxSlab;
        if (ageGroup === 'lessThan40') {
            taxSlab = overallIncome <= 800000 ? 0 : 0.3;
        } else if (ageGroup === '40to60') {
            taxSlab = overallIncome <= 800000 ? 0 : 0.4;
        } else if (ageGroup === 'greaterThan60') {
            taxSlab = overallIncome <= 800000 ? 0 : 0.1;
        }

        let taxPaid = 0;
        if (overallIncome > 800000) {
            taxPaid = (overallIncome - 800000) * taxSlab;
            overallIncome -= taxPaid;
        }

        // Format numbers with commas
        const formattedOverallIncome = overallIncome.toLocaleString();
        const formattedTaxPaid = taxPaid.toLocaleString();
        const formattedGrossIncome = grossIncome.toLocaleString();
        const formattedExtraIncome = extraIncome.toLocaleString();
        const formattedDeduction = deduction.toLocaleString();

        // Display modal  (modal used here so that the values can be passed in the html file and displayed in the modal)
        const modalBody =
         `   <div class="text-center h3 fw-bold ">Overall Income after Tax Deduction</div>
            <div class="text-center"> 
             <p class="text-center mb-2 h4 text-decoration-underline">${formattedOverallIncome}</p>
             <p class="mb-4"><span class="fw-bold text-danger">Tax Paid:</span> ${formattedTaxPaid}</p>
             </div>
            <p class="mb-2"><span class="fw-bold text-success">Gross Annual Income:</span> ${formattedGrossIncome}</p>
            <p class="mb-2"><span class="fw-bold text-success">Extra Income:</span> ${formattedExtraIncome}</p>
            <p class="mb-2"><span class="fw-bold text-success">Total Applicable Deduction:</span> ${formattedDeduction}</p>
            <p class="mb-4"><span class="fw-bold text-success">Age Group:</span> ${ageGroupText}</p>`;
        $('#resultModal .modal-body').html(modalBody);
        $('#resultModal').modal('show');
    }

    
    $('#ageGroup').on('change', function () {
        const ageGroup = $(this).val();
        if (ageGroup !== '') {
            $('#ageGroup').removeClass('is-invalid');
            $('#ageGroup').tooltip('dispose');
        }
    });

    // Function to check whether entered value is a number or not
    function checkInputIsNumber(inputElement, inputName) {
        const inputValue = inputElement.val();
        if (isNaN(inputValue)) {inputElement.addClass('is-invalid');
            inputElement.tooltip({
                title: "Entered value must be a valid number" ,
                placement: 'right',
                trigger: 'hover',
            });
            isValid = false;
        } 
        else if (inputValue === '') {
            inputElement.addClass('is-invalid');
            inputElement.tooltip({
                title: "Please enter a valid number",
                placement: 'right',
                trigger: 'hover',
            });
            isValid = false;
        } else {
            inputElement.removeClass('is-invalid');
            inputElement.tooltip('dispose');
        }
    }
});
