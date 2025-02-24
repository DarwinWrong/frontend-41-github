const concert = {
    name: 'Олександр',
    startShow: function(callback, nameSong){
        callback.call(this, nameSong);
    }
}
concert.startShow(function(nameSong){
    console.log(`Співак ${this.name} виконує пісню:  ${nameSong}`);
}, 'Bohemian Rhapsody');