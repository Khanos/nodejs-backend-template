const {expect} = require('chai');
const request = require('supertest').agent;
const app = require('../server.js');
before(function (done) {
  app.on("appStarted", function(){
      done();
  });
});
describe('Controllers', () => {
  describe('User', () => {
    it('getUser: should return a json with user info', async () => {
      // expect(true).to.equal(true);
      const res = await request(app).get('/api/v1/getuser');
      expect(res.status).to.equal(200);
      expect(res.body).not.to.be.empty;
      expect(res.body).to.be.an('object');
      console.log(res.body);
      expect(res.body).ownProperty('name');
      expect(res.body).ownProperty('age');
      expect(res.body).ownProperty('email');
      expect(res.body).ownProperty('password');
    });
    it('getUserFromApi: should return a json with user info from an api', async () => {
      // expect(true).to.equal(true);
      const res = await request(app).get('/api/v1/getuserfromapi');
      expect(res.status).to.equal(200);
      expect(res.body).not.to.be.empty;
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status').equal('success');
      expect(res.body).to.have.property('data').to.be.an('array');
      console.log(res.body.data[0]);
      expect(res.body).to.have.property('error').equal(false);
      expect(res.body).to.have.property('message').equal('User fetched successfully');
    });
    it('getUserFromDataBase: should return an user from the database', async () => {
      // expect(true).to.equal(true);
      const res = await request(app).get('/api/v1/getuserfromdatabase');
      expect(res.status).to.equal(200);
      expect(res.body).not.to.be.empty;
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('status').equal('success');
      expect(res.body).to.have.property('data').to.be.an('array');
      console.log(res.body.data[0]);
      expect(res.body).to.have.property('error').equal(false);
      expect(res.body).to.have.property('message').equal('User fetched successfully');
    });
  });
})