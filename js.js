$(".btn-add").click(function() {
    // var newTR = $("<tr>").text("").addClass("tr-toggle").on("click", function () {
    //     $(this).toggleClass("tr-done");
    // });
    // var data1 = $("<td>").text($(".field-1").val());
    // var data2 = $("<td>").text($(".field-2").val());
    // var data3 = $("<td>").text($(".field-3").val());
    // $(".tbl").append(newTR.prepend(data1,data2,data3))

    if ($(".field-1").val()!="" && $(".field-2").val()!="" && $(".field-3").val()!="")
    {
        // var newTR = $("<tr>").text("").addClass("tr-toggle").on("click", function () {
        //     $(this).toggleClass("tr-done");
        // });
        var newTR = $("<tr>").text("").addClass("tr-toggle");
        var data1 = $("<td>").text($(".field-1").val());
        var data2 = $("<td>").text($(".field-2").val());
        var data3 = $("<td>").text($(".field-3").val());
        var newTD = $("<td>").text("")
        var newDelete = $("<button>").addClass("btn-remove btn btn-danger");
        var addFA = $("<i>").addClass("fas fa-times");
        var newCheck= $("<button>").addClass("btn-done btn btn-success");
        var addFA2 = $("<i>").addClass("fas fa-check");

        var newDelBtn = $(newTD).append(newDelete.prepend(addFA)).on("click", function () {
            $(".btn-remove").click(function() {
                $(this).closest("tr").remove();
            })
        });
        var newCheckBtn = $(newDelBtn).prepend(newCheck.prepend(addFA2)).on("click", function () {
            $(this).closest("tr").toggleClass("tr-done");
        });

        $(".tbl-task").append(newTR.prepend(data1,data2,data3,newCheckBtn, newDelBtn))
    }
    else
    {
        alert("A field is empty!");
    }
})

$(".btn-clear").click(function() {
    $(".field-1").val("");
    $(".field-2").val("");
    $(".field-3").val("");
})
$(".btn-remove").click(function() {
    $(this).closest("tr").remove();
})
$(".btn-done").click(function() {
    $(this).closest("tr").toggleClass("tr-done");
})