var yearslider = $('#yearofmortgageslider').val();
var interestslider = $('#interestslider').val();
$('#currectyear').val(yearslider);
$('#currectinterest').val(interestslider);
$('#yearofmortgageslider').change(function() {
    $('#currectyear').val(this.value);
})
$('#interestslider').change(function() {
    $('#currectinterest').val(this.value);
})
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