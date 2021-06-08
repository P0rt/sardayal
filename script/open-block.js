document.getElementById('button-cells').onclick = function() {
    if (document.getElementById('fn__grid').classList.contains('future-news__grid-pressed')) {
    document.getElementById('fn__grid').classList.remove('future-news__grid-pressed');
    document.getElementById('button-cells').classList.remove('button__rotate');
    document.getElementById('unique__cell').classList.add('unique__cell');
    var elements = document.getElementsByClassName("table__cell");
    for (let i=3; i<9;i++){
        elements[i].classList.add("odd__cells");
        }
    }
    else {
        document.getElementById('fn__grid').classList.add('future-news__grid-pressed');
        document.getElementById('button-cells').classList.add('button__rotate');
        document.getElementById('unique__cell').classList.remove('unique__cell');
        var elements = document.getElementsByClassName("odd__cells");
        for (let i=0; i<6;i++){
            elements[0].classList.remove("odd__cells");
            }
    }
}
