
        $(document).ready(function () {
            loadData();
            checkTime();
            
        });

        function checkTime(){
            date = new Date();
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            thu = Date();
            let suba = "";
            for(var j = 0; j < 3; j++){
                suba += thu[j];
            }
            if(suba == 'Mon'){
                $(".monday").css("background","red");
            }
            else if(suba == 'Tue'){
                $(".tuesday").css("background","red");
            }
            else if(suba == 'Wed'){
                $(".wednesday").css("background","red");
            }
            else if(suba == 'Thu'){
                $(".thursday").css("background","red");
            }
            else if(suba == 'Fri'){
                $(".friday").css("background","red");
            }
            else if(suba == 'Sat'){
                $(".saturday").css("background","red");
            }
            else if(suba == 'Sun'){
                $(".sunday").css("background","red");
            }
        }

        var arrEle;
        function loadData() {
            $("#tblAct tbody").empty();
            var strResult = "";
            $.ajax(
                {
                    url: "https://62874cbde9494df61b35fb64.mockapi.io/dataCalendar",
                    type: "GET",
                    dataType: "json",
                    success: function (data) {
                        arrEle = data;
                        for (var i = 0; i < data.length; i++) {
                            strResult = strResult + "<tr>" +
                                "<td class='something' >" + data[i].time +"</td>"+
                                "<td>" + data[i].T2 + "</td>" +
                                "<td>" + data[i].T3 + "</td>" +
                                "<td>" + data[i].T4 + "</td>" +
                                "<td>" + data[i].T5 + "</td>" +
                                "<td>" + data[i].T6 + "</td>" +
                                "<td>" + data[i].T7 + "</td>" +
                                "<td>" + data[i].CN + "</td>" +
                                "<td>" +
                                '<img class="actionIcon" src="2496733.png" onclick="deleteE(' + data[i].id + ')" alt="Delete" srcset=" ">' +
                                "</td>" +
                                "</tr>";
                        }
                        console.log(strResult);
                        $("#tblAct tbody").append(strResult);
                    }
                }
            );
        }

        // ==========================================================================================================================================

        $("#btnModalAdd").click(function () {
            var data = {};
            data.T2 = $("#T2").val();
            data.T3 = $("#T3").val();
            data.T4 = $("#T4").val();
            data.T5 = $("#T5").val();
            data.T6 = $("#T6").val();
            data.T7 = $("#T7").val();
            data.CN = $("#CN").val();
            data.time = $("#time").val();

            $.ajax({
                url: "https://62874cbde9494df61b35fb64.mockapi.io/dataCalendar",
                type: "POST",
                data: data,
                success: function (result) {
                    $("#form-to-add").css("display", "none");
                    $(".modal-add-wrapper").hide();
                    $("#tbody").empty();
                    loadData();
                    loadDataMobile();
                }
            })
            console.log(data);
        });

        

        // ============================================================
        //Delete Function
        function deleteE(id) {
            $.ajax({
                url: "https://62874cbde9494df61b35fb64.mockapi.io/dataCalendar/" + id,
                type: "DELETE",
                success: function (data) {
                    console.log(data);
                    loadData();
                    loadDataMobile();
                }
            })
        }


        // add-mdal

        $("#addModal").click(function(){
            $("#form-to-add").show();
            $(".modal-add-wrapper").show();
        })
        $("#btnModalCancel").click(function(){
            $("#form-to-add").hide();
            $(".modal-add-wrapper").hide();
        })

        