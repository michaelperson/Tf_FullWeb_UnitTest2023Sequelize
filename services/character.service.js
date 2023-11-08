const { CharacterDTO, CharacterDetailDTO } = require('../dto/character.dto');
const db = require('../models');
const { Op } = require('sequelize');

const characterService = {
    fetchAll: async () => {
        const characters = await db.Character.findAll();
        return characters.map(char => new CharacterDTO(char));
    },

    fetchOne: async (id) => {
        const character = await db.Character.findOne({
            where: { id } // --> { id: id }
        });

        return new CharacterDetailDTO(character);
    },

    // Exemple de fetch plus détaillé
    fetchFun: async () => {
        const characters = await db.Character.findAll({
            where: db.Sequelize.or(
                {
                    firstname: {
                        [Op.like]: 'John'
                    }
                },
                {
                    firstname: {
                        [Op.like]: 'Jacqouille'
                    }
                }
            )
        });

        return characters.map(char => new CharacterDTO(char))
    },

    insert: async (data) => {
        const character = await db.Character.create(data)
        return new CharacterDetailDTO(character)
    },

    delete: async (id) => {
        const nbRowDeleted = await db.Character.destroy({
            where: { id } // --> { id: id }
        });

        return nbRowDeleted === 1;
    }
};

module.exports = characterService;