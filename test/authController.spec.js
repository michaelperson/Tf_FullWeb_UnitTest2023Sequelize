const app = require('../server');    
const db = require('../models');
// Permet d'utiliser l'API Should de "Chai" - OBLIGATOIRE

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
// Permet de lancer des requetes vers le server
chai.use(chaiHttp);

describe('Character Controller', () => {
    before(async () => {
          await db.sequelize.sync({ force: true });
        const newCharacter =   { id: 1, firstname: 'Character 1', lastname: "lname1",birthdate: new Date() };
        await  db.Character.create(newCharacter);
        const newCharacter2 =  { id: 2, firstname: 'Character 2', lastname: "lname2",birthdate: new Date() };
        await db.Character.create(newCharacter2);
         
    });

    after(() => {
        
    });

    it('should get all Characters', (done) => {
        chai.request(app)
            .get('/api/character')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
                done();
            });
    });

     
});