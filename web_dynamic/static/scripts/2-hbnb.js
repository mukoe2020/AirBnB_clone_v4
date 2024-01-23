$(document).ready(function() {
    let checkedAmen = {}; // Empty dict to store the checked Amenities
    $('input[type="checkbox"]').change(function() {
        let amenityID = $(this).data('id');
        let amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            checkedAmen[amenityID] = amenityName; // Store Amenity ID in the the dict
        } else {
            delete checkedAmen[amenityID]; // Remove Amenity ID from the dict
        }
        // update the h4 tag inside the div Amenities with the list of Amenities checked
        let amenitiesList = Object.values(checkedAmen).join(', ');
        $('.amenities h4').text(amenitiesList);
    });
});

$.ajax({
    type: 'GET',
    url: 'http://0.0.0.0:5001/api/v1/status/',
    dataType: 'json',
    success: function (data) {
        if (data.status === 'OK') {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('available');
        }
    }
});
