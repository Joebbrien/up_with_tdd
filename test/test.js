const should = require('should');
const supertest = require('supertest');

 const server = supertest.agent('http://localhost:4000');

 //unit test starting point

 describe('Sample unit test', function(){

    //should return home page
    it('Should return home page', function(done){
        //call server home page
        server.get('/').expect('Content-type',/text/).expect(200).end(function(err,res){
            //http status should be 200
           res.status.should.equal(200);
            done();
        });
    });
 });
 