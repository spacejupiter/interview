const app = require('../../app');
const request = require('supertest');




describe('branches',()=>{
    it('returns a status code of 200 if a location header is passed as, this location header is the town name',async()=>{
        const res = await request(app).get('/branches').set('location','ROCHESTER');
        expect (res.statusCode).toEqual(200);
    });

    it('returns a status code of 400 if a location header is empty or null',async ()=>{
        const res = await request(app).get('/branches').set('location','');
        expect (res.statusCode).toEqual(400);
    })

    it('returns   a message body of location must not be empty or null',async ()=>{
        const res = await request(app).get('/branches').set('location','');
        expect (res.body).toEqual('location must not be empty or null');
    })

})