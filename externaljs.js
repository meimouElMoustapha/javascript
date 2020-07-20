

$(document).ready(function(){
  // when user clicks the '+' button.
$('#more-input-button').on('click', function(){

  // create a new input dynamically.
  $('#name-inputs').append("<input type='text'>");

  // focus the newly added input.
  $('#name-inputs input:last-child').focus();
});

// a function that checks all the inputs when called. It applies an alert state or ok state to the input.
function validateInputs() {
  $('#name-inputs > input').each(function(){
    if ($(this).val() === "") {
      $(this).removeClass().addClass('alert');
    } else {
      $(this).removeClass().addClass('ok');
    }
  });
}

// apply keyboard events to name inputs, for existing and future matching elements.
$('#name-inputs').delegate('input[type="text"]', 'keyup blur', function(){
  validateInputs();
});

// logic when user clicks on the submit button.
$('#submit-button').on('click', function(){

  // validate the inputs once more.
  validateInputs();

  // disable the inputs and button
  $("input").prop("readonly", true);
  $("input[type='submit'], button").prop("disabled", true);

  // fetched the result.
  // an array that store all the values.
  var values = [];

  // loop and get each value.
  $('#name-inputs > input').each(function(){
		// add the value to the result array.
		values.push( $(this).val() );
  });

  // alert to confirm the result.
  var result = confirm('Please confirm: ' + values.join(', '));

  // when the user confirm the submission.
  if (result) {
    // reset the inputs for
    $('#name-inputs').html("<input type='text'>");
    $("input[type='submit'], button").prop('disabled', false);
    $('#name-inputs input').focus();
  } else {
    // re-enable the inputs and button for changes
    $('input').prop('readonly', false);
    $("input[type='submit'], button").prop('disabled', false);
  }

});


});
