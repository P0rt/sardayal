document.getElementById('button-cells').onclick = function() {
    document.getElementById('fn__grid').classList.add('future-news__grid-pressed');
    var elements = document.getElementsByClassName("odd__cells");
    for (let i=0; i<6;i++){
        elements[0].classList.remove("odd__cells");
    }
  }
