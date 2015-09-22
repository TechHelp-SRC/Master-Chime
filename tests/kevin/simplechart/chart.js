window.onload = function() {
    var r = Raphael("graph_canvas"),
        fin = function () {
            this.flag = r.popup(this.bar.x, this.bar.y, this.bar.value || "0").insertBefore(this);
        },
        fout = function () {
            this.flag.animate({opacity: 0}, 300, function () {this.remove();});
        },
        txtattr = { font: "12px sans-serif" };

    r.text(160, 10, "Test Chart").attr(txtattr);
    r.text(33, 220, "Sun").attr(txtattr);
    r.text(75, 220, "Mon").attr(txtattr);
    r.text(116, 220, "Tues").attr(txtattr);
    r.text(156, 220, "Wed").attr(txtattr);
    r.text(198, 220, "Thurs").attr(txtattr);
    r.text(238, 220, "Fri").attr(txtattr);
    r.text(279, 220, "Sat").attr(txtattr);

    r.barchart(10, 10, 300, 220, [[55, 20, 13, 32, 5, 1, 2]]).hover(fin, fout);
}
