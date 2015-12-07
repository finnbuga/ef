function Slider(el) {
  this.ul = el.children[0];
  this.li = this.ul.children;
  this.currentIndex = 0;

  this.adjustWidth = function() {
    for (var i = 0; i < this.li.length; i++) {
      this.li[i].style.width = this.li[0].clientWidth + 'px';
    };
    // make <ul> as large as all <li>’s
    this.ul.style.width = (this.li[0].clientWidth * this.li.length) + 'px';

    this.currentIndex = 0;
  }

  this.adjustWidth();

  this.goTo = function(index) {
    // filter invalid indices
    if (index < 0 || index > this.li.length - 1) {
      return;
    }

    // move <ul> left
    this.ul.style.left = '-' + (100 * index) + '%';

    this.currentIndex = index;
  }

  this.goToPrev = function() {
    this.goTo(this.currentIndex - 1);
  }

  this.goToNext = function() {
    this.goTo((this.currentIndex + 1) % this.li.length);
  }
}

window.onload = function(e) {
  var slider = new Slider(document.getElementsByClassName("slider")[0]);
  window.setInterval(function(){ slider.goToNext() }, 2000);
}
