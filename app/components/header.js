import Component from '@ember/component';

export default Component.extend({
  didRender() {
    this._super(...arguments);
    let offer = document.getElementById("offer");
    setTimeout(function(){
      document.getElementById("header").classList.add("visible");
      if (offer.getBoundingClientRect().top - document.documentElement.clientHeight + 400 < 0) {
        offer.classList.add("visible");
      }
    }, 100);
    document.onscroll = ()=>{
      if (offer.getBoundingClientRect().top - document.documentElement.clientHeight + 300 < 0) {
        document.onscroll = ()=>(false);
        offer.classList.add("visible");
      }
    }
  }
});
