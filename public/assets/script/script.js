var yearslider = $('#yearofmortgageslider').val();
var interestslider = $('#interestslider').val();
$('#currectyear').val(yearslider);
$('#currectinterest').val(interestslider);

//changes the values of the years and interest box based on the position of the slider
$('#yearofmortgageslider').change(function() {
    $('#currectyear').val(this.value);
})
$('#interestslider').change(function() {
    $('#currectinterest').val(this.value);
})

//for the color of the slider before position change to blue and after leave as gray
$('input[type="range"]').change(function () {
    //formula is to change value to add back into the css color-stop
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
    $(this).css('background-image',
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #1091cc), '
                + 'color-stop(' + val + ', #d8d8d8)'
                + ')'
    );
});

//remove color from mandatory field
$('#loaninput').change(function () {
    if($('#loaninput').val() === ''){
        $('#mandatoryfieldloan').css('color', 'red');
        $('#mandatoryfieldloan').text('Mandatory Field');
    }
    else{
        $('#mandatoryfieldloan').empty();
    }
});
$('#taxinput').change(function () {
    if($('#taxinput').val() === ''){
        $('#mandatoryfieldtax').css('color', 'red');
        $('#mandatoryfieldtax').text('Mandatory Field');
    }
    else{
        $('#mandatoryfieldtax').empty();
    }
});
$('#insuranceinput').change(function () {
    if($('#insuranceinput').val() === ''){
        $('#mandatoryfieldinsurance').css('color', 'red');
        $('#mandatoryfieldinsurance').text('Mandatory Field');
    }
    else{
        $('#mandatoryfieldinsurance').empty();
    }
});

//on button click send data to server to handle the math
$('#caluclatebutton').on('click', function (event) {
    if(screen.width<=450){
        console.log('show hidden field')
        $('#fullrightmobile').css({'visibility':'visible'})
    }
    console.log("click calculate button");
    event.preventDefault();
    var newObj = {
        years: $('#currectyear').val(),
        interestRate: $('#currectinterest').val(),
        loanAmount: $('#loaninput').val(),
        annualTax: $('#taxinput').val(),
        annualInsurance: $('#insuranceinput').val()
    }
    console.log('new string captured')
    console.log(newObj)
    ///checks if input field is blank or not a number 
    if(isNaN(parseInt(newObj.loanAmount)) || isNaN(parseInt(newObj.annualTax)) || isNaN(parseInt(newObj.annualInsurance))){
        console.log('not filled in');
        ///maybe add an alert
    }
    else{
        console.log('filled in');
        console.log(' is this a post');
        $.ajax({
            type: "POST",
            url: '/',
            data: newObj
        }).then(function(data) {
            ////dont recreate the html on the server 
            ///side but just populate the info on the page itself
                $('#principalamount, #principalamountmobile').text('$ '+data.monthlyMortgagePayment);
                $('#taxamount, #taxamountmobile').text('$ '+data.monthlyTaxPayment);
                $('#insuranceamount, #insuranceamountmobile').text('$ '+data.monthlyInsurancePayment);
                $('#totaldollaramount, #totaldollaramountmobile').text('$ '+data.monthlyTotal);
                $('#caluclatebutton').val('RECALCULATE');
                $('#principalamount,#taxamount,#insuranceamount,#totaldollaramount').css({'color':'#3e3d3f','opacity': 'unset'})
        });
    }
})