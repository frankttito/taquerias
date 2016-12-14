//JavaScript File
var api_key = 'keyjUyqxvapBphwo4';
var ttrucks_record = 'https://api.airtable.com/v0/appSrgke7E0ElZhMY/TTrucks?api_key=' + api_key;

function renderRecords(data) {
  $(data.records).each(function(index, truck) {
    var truck_name = truck.fields['Name'];
    var truck_where = truck.fields['District'];
    var truck_pics = truck.fields['Pictures'];
    var truck_address = truck.fields['Address'];
    var truck_info = '';
    if (truck_name) {
      truck_info += `<li>`;
      if (truck_pics) {
        $.each(truck_pics, function(i, pic) {
          truck_info += `<img src="${pic.url}">`;
        });
      }
      truck_info += `<br> Name: ${truck_name} <br> Where: ${truck_where}<br> Address: ${truck_address} <br>`;
      //truck_info += `<br> Address: ${truck_address} <br>`;
      truck_info += `</li>`;
    }
    $('.truck').append(truck_info);
  });
}

$.get(ttrucks_record, renderRecords);
