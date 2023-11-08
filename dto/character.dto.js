class CharacterDTO {

    // Props
    id;
    firstname;
    lastname;

    constructor(data) {
        this.id = data.id;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
    }
}

class CharacterDetailDTO {

    // Props
    id;
    firstname;
    lastname;
    gender;
    birthdate;

    constructor(data) {
        this.id = data.id;
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.gender = data.gender;
        this.birthdate = new Date(data.birthdate);
    }
}

module.exports = {
    CharacterDTO,
    CharacterDetailDTO
}