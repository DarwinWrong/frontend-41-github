const pets = {
    list: ['Кіт', 'Собака'],
    addPet: function (pet) {
        if (pet) {
            this.list.push(pet);
            this.newList();
        }
    },
    newList: function () {
        const petList = document.getElementById("petsList");
        petList.innerHTML = '';
        this.list.forEach((pet) => {
            const li = document.createElement('li');
            li.textContent = pet;
            petList.appendChild(li);
        });
    }
};

pets.newList();

document.getElementById('addPetButton').addEventListener('click', function () {
    const newPet = document.getElementById('petName').value;
    pets.addPet(newPet);
    document.getElementById('petName').value = '';
    }
);