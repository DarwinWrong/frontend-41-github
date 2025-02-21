const theater = {
    actors: ['Oleg', 'Dmitry', 'Anna'],
    role: 'Hamlet',
    assignRole: function (actor, callback) {
        callback.call(this, actor);
    }
};

theater.assignRole('Oleg', function (actor) {
    console.log(`Actor ${actor} plays the role: ${this.role}`);
});
