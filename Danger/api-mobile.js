$(document).ready(function () {
    loadDataMobile();
})



var arrEleMobile;
function loadDataMobile() {
    $(".thu-2").empty();
    $(".thu-3").empty();
    $(".thu-4").empty();
    $(".thu-5").empty();
    $(".thu-6").empty();
    $(".thu-7").empty();
    $(".cn").empty();

    var dataT2 = "";
    var dataT3 = "";
    var dataT4 = "";
    var dataT5 = "";
    var dataT6 = "";
    var dataT7 = "";
    var dataCN = "";
    $.ajax(
        {
            url: "https://62874cbde9494df61b35fb64.mockapi.io/dataCalendar",
            type: "GET",
            dataType: "json",
            success: function (data) {
                arrEleMobile = data;
                for (var i = 0; i < data.length; i++) {
                    dataT2 = dataT2 + "<td>" + data[i].time + "<br>" + data[i].T2 + "</td>";
                    dataT3 = dataT3 + "<td>" + data[i].time + "<br>" + data[i].T3 + "</td>";
                    dataT4 = dataT4 + "<td>" + data[i].time + "<br>" + data[i].T4 + "</td>";
                    dataT5 = dataT5 + "<td>" + data[i].time + "<br>" + data[i].T5 + "</td>";
                    dataT6 = dataT6 + "<td>" + data[i].time + "<br>" + data[i].T6 + "</td>";
                    dataT7 = dataT7 + "<td>" + data[i].time + "<br>" + data[i].T7 + "</td>";
                    dataCN = dataCN + "<td>" + data[i].time + "<br>" + data[i].CN + "</td>";
                }
                $(".thu-2").append(dataT2);
                $(".thu-3").append(dataT3);
                $(".thu-4").append(dataT3);
                $(".thu-5").append(dataT3);
                $(".thu-6").append(dataT3);
                $(".thu-7").append(dataT3);
                $(".cn").append(dataCN);
            }
        }
    );
}