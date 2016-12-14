//JavaScript File
var api_key = 'keyjUyqxvapBphwo4';
var restaurant_record = 'https://api.airtable.com/v0/appSrgke7E0ElZhMY/Restaurants?api_key=' + api_key;

function renderRecords(data) {
  $(data.records).each(function(index, taquerias) {
    var taquerias_name = taquerias.fields['Name'];
    var taquerias_where = taquerias.fields['District'];
    var taquerias_pics = taquerias.fields['Pictures'];
    var taquerias_address = taquerias.fields['Address'];
    var taquerias_info = '';
    if (taquerias_name) {
      taquerias_info += `<li>`;
      if (taquerias_pics) {
        $.each(taquerias_pics, function(i, pic) {
          taquerias_info += `<img src="${pic.url}">`;
        });
      }
      taquerias_info += `<br> Name: ${taquerias_name} <br> Where: ${taquerias_where}`;
      taquerias_info += `<br> Address: ${taquerias_address} <br>`;
      taquerias_info += `</li>`;
    }
    $('.taquerias').append(taquerias_info);
  });
}

$.get(restaurant_record, renderRecords);
