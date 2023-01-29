import { Response } from "express";
const request = require('supertest');
const http = require('http');
const app = require('../index');

describe('GET requests', () => {
    it('should not connect to the server', async () => {
        const res = await request(app).get('/repeat');
        expect(res.status).toEqual(404);
    });
});

describe('POST requests', () => {
    it('should return the proper result when given a valid sentence', async () => {
        const res = await request(app)
        .post('/repeat')
        .send({
            sentence: "Hello, my name is Mohammed"
        })
        expect(res.body.status).toEqual(200);
        expect(res.body.result.letter).toBe('m');
        expect(res.body.result.count).toEqual(5);
    });

    it('should return the first letter alphabetically when faced with equal frequencies', async () => {
        const res = await request(app)
        .post('/repeat')
        .send({
            sentence: "zzzzaaaabbbbmmmm"
        })
        expect(res.body.status).toEqual(200);
        expect(res.body.result.letter).toBe('a');
        expect(res.body.result.count).toEqual(4);
    });

    it('should count the same letter whether uppercase or lowercase', async () => {
        const res = await request(app)
        .post('/repeat')
        .send({
            sentence: "zZzZzZzZzZ"
        })
        expect(res.body.status).toEqual(200);
        expect(res.body.result.letter).toBe('z');
        expect(res.body.result.count).toEqual(10);
    });
    
    describe('invalid requests', () => {
        it('should return an error if "sentence" parameter does not exist', async () => {
            const res = await request(app)
            .post('/repeat')
            .send({
                hello: "world"
            })
            expect(res.body.status).toEqual(406);
            expect(res.body.error).toBe("'Sentence' parameter was not passed");
        });

        it('should return an error if "sentence" type is not string', async () => {
            const res = await request(app)
            .post('/repeat')
            .send({
                sentence: 5
            })
            expect(res.body.status).toEqual(406);
            expect(res.body.error).toBe("Value passed was not a string");
        });

        it('should return an error if empty sentence was passed', async () => {
            const res = await request(app)
            .post('/repeat')
            .send({
                sentence: 5
            })
            expect(res.body.status).toEqual(406);
            expect(res.body.error).toBe("Value passed was not a string");
        });
    });
});

afterAll((done: jest.DoneCallback) => {
    app.close();
    done();
});