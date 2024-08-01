$(document).ready(function () {
    $("#btn").click(
        function () {
            if ($("#email").val() === "") {
                alert("email field is empty")
            } else if ($("#password").val() != $("#re-password").val()) {
                alert("password did not match")
            }else if($('#check').prop('checked') != true ){
                alert('Check the checkBox');
            }else{
                alert("submission succesful")
            }
        }
    )
  }
)


