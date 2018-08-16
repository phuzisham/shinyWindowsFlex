$("#screenCheck").click(function() {
  $("#hidden1").show(1000);
  $("#screenCheckDiv").hide(1000);
});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$('#submit-estimate').click(function(e) {
  e.preventDefault();
  let windows = parseInt($('#windows').val());
  let radio = $('input:radio[name="radios"]:checked').val();
  let email = $('#email').val();

  if ($('#windows').val()) {
    if (isNaN(windows)) {
      alert('Please input a numerical value.');
    } else if (validateEmail(email) == false) {
      alert('Please enter a valid email address.');
    } else {
    validateForm(windows, radio, email);
    }
  } else {
    alert('Please fill out all form fields.');
  }
});


function validateForm(windows, radio, email) {
  if ($('input[name="screenCheck"]').is(':checked')) {
    let screens = parseInt($('#screens').val());
    if (isNaN(screens)) {
      alert('Please input a numerical value.');
    } else {
      $('#estimate-form').html("<div class='table-item'>"+"<h1 class='header-text'>Shiny Windows</h1><h4>Your online estimate is: $"+parseInt(estimateReturn(windows, radio, email, screens))+"</h4><h5>Call <b>406-672-7616</b> to schedule a visit to your property for a free quote or window cleaning!</h5>"+"</div>");
    }
  } else {
    console.log('made it');
    $('#estimate-form').html("<div class='table-item'>"+"<h1 class='header-text'>Shiny Windows</h1><h4>Your online estimate is: $"+parseInt(estimateReturn(windows, radio, email, screens))+"</h4><h5>Call <b>406-672-7616</b> to schedule a visit to your property for a free quote or window cleaning!</h5>"+"</div>");
  }
}

function estimateReturn(windows, radio, email, screens) {
  let result = 0;
  if (radio == 'insideRadio') {
    windows = windows * 5;
    if (screens) {
      return windows + screens;
    } else {
      return windows;
    }
  } else {
    windows = windows * 3;
    if (screens) {
      return windows + screens;
    } else {
      return windows;
    }
  }
}
