var app = new Vue ({
  el: '#app',
  data: {
    counter: 0,
    auto: null,
    // images: [
    //   'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
    //   'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
    //   'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
    //   'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
    // ]

    //CON ARRAY DI OGGETTI
    images: [
      {
        src: 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
        alt: 'landscape1'
      },
      {
        src: 'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
        alt: 'landscape2'
      },
      {
        src: 'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
        alt: 'landscape3'
      },
      {
        src: 'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg',
        alt: 'landscape4'
      }
    ]
  },
  methods: {
    next(){
      if (this.counter < this.images.length -1) {
        this.counter++;
      } else {
        this.counter = 0;
      }
    },
    prev() {
      if (this.counter === 0) {
        this.counter = this.images.length -1;
      } else {
        this.counter--;
      }
    },
    change(index) {
      clearInterval(this.auto);
      this.counter = index;
    }
  },
  mounted:function() {
    //autoplay
    this.auto = setInterval(this.next,2000); //metodo senza parentesi
  }
});
