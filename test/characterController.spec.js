const app = require('../server');    
const db = require('../models');  
// Permet d'utiliser l'API Should de "Chai" - OBLIGATOIRE

const chai = require('chai');
const chaiHttp = require('chai-http');
const { CharacterDetailDTO } = require('../dto/character.dto');
const should = chai.should();
// Permet de lancer des requetes vers le server
chai.use(chaiHttp);

//Character de tests - fixtures
const newCharacter =   { id: 1, firstname: 'Character 1', lastname: "lname1",birthdate: new Date('1982-03-01') };
const newCharacter2 =  { id: 2, firstname: 'Character 2', lastname: "lname2",birthdate: new Date('1982-04-01') };

describe('Character Controller', () => {
    before(async () => {
        await db.sequelize.sync({ force: true });        
        await  db.Character.create(newCharacter);
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
                res.body.length.should.be.eql(2);
                done();
            });
    });
    it('should get one Characters', (done) => {
        chai.request(app)
            .get('/api/character/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');  
                let retour = new CharacterDetailDTO(res.body);  
                chai.expect(retour.id).to.equal(newCharacter.id);
                done();
            });
    });

     
});