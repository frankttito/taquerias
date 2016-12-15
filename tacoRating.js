//JavaScript File
var api_key = 'keyjUyqxvapBphwo4';
var rating_record = 'https://api.airtable.com/v0/appSrgke7E0ElZhMY/Rating?api_key=' + api_key;

function renderRecords(data) {
  $(data.records).each(function(index, fav) {
    var fav_name = fav.fields['Name'];
    var fav_rating = fav.fields['Rating'];
    var fav_status = fav.fields['Status']
    var fav_pics = fav.fields['Pictures'];
    var fav_info = '';
    if (fav_name) {
      fav_info += `<li>`;
      if (fav_pics) {
        $.each(fav_pics, function(i, pic) {
          fav_info += `<img src="${pic.url}">`;
        });
      }
      fav_info += ` <br> Name: ${fav_name} <br> Rating:${fav_rating} <br> Try Again? ${fav_status}`;
      fav_info += `</li>`;
    }
    $('.fav').append(fav_info);
  });
}

$.get(rating_record, renderRecords);
