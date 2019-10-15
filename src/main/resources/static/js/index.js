function buildProgressBar(id, label, framerate) {
    let html = "";

    html += "<div class='m-3'>"
    html += "<div class='progressBarOuter'>";
    html += "<div id='" + id + "' data-pct='0' data-framerate='" + framerate + "' class=\"progressBarInner\"><span id='pct" + id + "' class=\"progressPct\"></span></div></div>";
    html += "<div id='" + id + "btn' class='btn btn-success mt-2'>" + label + "</div>"
    html += "</div>"

    return html;
}

function resetBar(id) {
    $("#" + id).data('pct', 0);
    $("#" + id).width(0 + "%");
    $("#pct" + id).text(0 + "%");
}

function updateProgressBar(id) {
    let myPct = $("#" + id).data('pct');
    let framerate = $("#" + id).data('framerate');
    $("#" + id).width(myPct + "%");
    $("#pct" + id).text(myPct + "%");
    myPct += 1;
    $("#" + id).data('pct', myPct);
    if (myPct <= 100) {
        setTimeout(function() {updateProgressBar(id)}, framerate);
    }
}

$(function() {
    let html = "";
    html += buildProgressBar("meep", "one", 50);
    html += buildProgressBar("two", "two", 25);
    html += buildProgressBar("three", "three", 10);


    $("#tgt").html(html);
    $("#meepbtn").click(function () {
        resetBar("meep");
        updateProgressBar("meep");
    })
    $("#twobtn").click(function () {
        resetBar("two");
        updateProgressBar("two");
    })
    $("#threebtn").click(function () {
        resetBar("three");
        updateProgressBar("three");
    })
});