function minus() {
    var b;
    var c = this.document.getElementById("current").value;
    b = c + "-";
    this.document.getElementById("current").value = b;
}
function sqrt() {
    var b;
    var k;
    var c = this.document.getElementById("current").value;
    k = Math.sqrt(c);
    b = c + "=" + k;
    this.document.getElementById("current").value = b;
}
function fact() {
    var b;
    var k = 1;
    var i = 1;
    var c = this.document.getElementById("current").value;
    for (i = 1; i <= c; i++) {
        k = k * i;
    }
    b = c + "=" + k;
    this.document.getElementById("current").value = b;
}
var s1, s2, s3;
s1 = true;
s2 = true;
s3 = true;
var p1, p2, p3;
function ravno() {
    var b;
    var c = this.document.getElementById("current").value;
    var k;
    k = eval(c);
    b = c + " = " + k;
    if (s1 == true) {
        this.document.getElementById("last").innerHTML = k;
        p1 = k;
        s1 = false;
    }
    else if (s2 == true) {
        this.document.getElementById("middle").innerHTML = p1;
        this.document.getElementById("last").innerHTML = k;
        p2 = p1;
        p3 = k;
        s2 = false;
    }
    else if (s3 == true) {
        this.document.getElementById("first").innerHTML = p2;
        this.document.getElementById("middle").innerHTML = p3;
        this.document.getElementById("last").innerHTML = k;
        p2 = p3;
        p3 = k;
    }
    this.document.getElementById("current").value = "";
}
