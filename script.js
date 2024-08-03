
$(document).ready(function () {
    $("#btn").click(function () {
        // Get values from input fields
        const email = $("#email").val();
        const password = $("#password").val();
        const rePassword = $("#re-password").val();
        const isChecked = $('#check').prop('checked');

        // Validate email field
        if (email === "") {
            alert("Email field is empty");
        } 
        // check password matched or not matched
        else if (password !== rePassword) {
            alert("Passwords do not match");
        } 
        // Check if checkbox is checked
        else if (!isChecked) {
            alert("Please check the checkbox");
        } 
        // if All validations passed
        else {
            alert("Submission successful");
        }
    });
});

