const app = require('../../app');
const request = require('supertest');
//const axios=require('axios');
const mockAxios=require('axios');
const { default: axios } = require('axios');

const fetchBranch= require('../../api/fetchBranch.js');
jest.mock('axios')
mockAxios.get.mockResolvedValueOnce({data:{brand:{}}});







describe('fetchBranch api call',()=>{

    it('returns a status code of 200 if a location header is passed as, this location header is the town name',async()=>{
        let res = await fetchBranch.fetchBranchData();
        console.log(res);
        expect (res).toEqual({data:{brand:{}}});
    });

})