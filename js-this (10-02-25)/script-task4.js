const concert = {
    singer: 'Oleksandr',
    startShow: function (callback) {
        const song = 'Summer Evening';
        callback.call(this, song);
    }
};

concert.startShow(function (song) {
    console.log(`The singer ${this.singer} performs the song: "${song}"`);
});
