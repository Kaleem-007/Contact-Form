
function formSubmission() {

    event.preventDefault()

    let f_name = document.getElementById('f_name').value;
    let L_name = document.getElementById('L_name').value;
    let e_mail = document.getElementById('e_mail').value;
    let message = document.getElementById('message').value;
    let value;
    let CB_value;

    function checkingCB(CB_value) {

        let checkBox = document.getElementById('check_box').checked;

        if (checkBox == true) {

            CB_value = true;

        }

        else {

            CB_value = false;

        }

        return CB_value;

    }

    function checkingRadio(value) {

        let radio1 = document.getElementById('general_Enquiry').checked;

        let radio2 = document.getElementById('Support_request').checked;

        if (radio1 == true || radio2 == true) {

            value = true;

        } else {

            value = false;

        }

        return value;

    }

    function showingError() {

        let checkedValue = checkingRadio(value);

        let checkedCB = checkingCB(CB_value)

        if (f_name == 0 || L_name == 0 || e_mail == 0 || message == 0 || checkedValue === false || checkedCB === false) {

            document.getElementById('field1').style.display = 'Block';
            document.getElementById('field2').style.display = 'Block';
            document.getElementById('field3').style.display = 'Block';
            document.getElementById('field4').style.display = 'Block';
            document.getElementById('field5').style.display = 'Block';
            document.getElementById('field6').style.display = 'Block';

        }

        else if (f_name !== null && L_name !== null && e_mail !== null && message !== null && checkedValue === true && checkedCB === true) {

            alert('Your message was sent')

            document.getElementById('field1').style.display = 'none';
            document.getElementById('field2').style.display = 'none';
            document.getElementById('field3').style.display = 'none';
            document.getElementById('field4').style.display = 'none';
            document.getElementById('field5').style.display = 'none';
            document.getElementById('field6').style.display = 'none';

            location.reload()

        }

    }

    showingError()
}