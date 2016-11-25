(function () {
    var message = "Zdarec";
    document.getElementById("chk1").onclick = function () {
        document.getElementById("bt1").onclick = (!this.checked) ? null : 
            function () {
                console.log(message);
            }
    };
})();