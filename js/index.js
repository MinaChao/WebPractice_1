//load淡出
$("#status").delay(2000).fadeOut(800);
$("#loader").delay(3000).fadeOut(800);


//導覽列與TOP按鈕顯示
$(window).scroll(function (evt) {
    if ($(window).scrollTop() > 50) {
        $(".navbar").removeClass("navbar-top");
        // $(".btn-top").css("opacity", "1");
        $(".btn-top").css("display", "block");

    } else {
        $(".navbar").addClass("navbar-top");
        $(".btn-top").css("display", "none");
        // $(".btn-top").css("opacity", "0");
    }
    if ($(window).scrollTop() > 600) {
        $(".navbar").addClass("navbar-shadow");
    } else {
        $(".navbar").removeClass("navbar-shadow");
    }
});

document.body.id = "skrollr-body";
var s = skrollr.init();

function show_submit() {
    alert("提交成功！")
}
