const chai = require('chai');

describe("Test pour le plaisir", ()=>
{
   describe("Juste pour montrer que les appels aux tests se font dans tous les fichiers du dossier test", ()=>
   {
      it("ça marche",(done)=>{
          chai.expect(2).to.be.equal(1);
          done();
      });
   });
});