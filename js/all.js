$(document).ready(function () {
  $.ajax({
    method: "GET",
    // url: "https://randomuser.me/api/",
    url: "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6",
    dataType: 'json',
    data: '',
    async: true,
    // data: "data",
    // dataType: "dataType",
    // success: function (response) {
    // }
  })
    .done(function (msg) {
      // console.log('全部: ' + msg)
      // console.log(msg)
      // console.log(msg.results[0].email)
      // console.log('信箱: ' + msg.results[0].email)
      // $('.font1x').append(msg.results[i].email);





      for (let index = 0; index < 3; index++) {
        $('.newTbody').append('<tr> <th scope="row">' + (index+4) + '</th><th scope="col">' + msg[index].endDate + '</th> <th scope="col">' + msg[index].sourceWebName + '</th> <th scope="col">' + msg[index].title +'</th></tr>');

      }
      console.log(msg[0])

      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
      

      

    })
    $('#table').bootstrapTable()
});

