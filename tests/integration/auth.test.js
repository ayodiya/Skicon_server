// const request = require('supertest');
// let server;

// describe('api/auth', () => {
//   beforeEach(() => {
//     {
//       server = require('../../server');
//     }
//   });
//   afterEach(() => {
//     server.close();
//   });

//   describe('POST /', () => {
//     //Intial Registration
//     // it(' REGISTER should return a token', async () => {
//     //   const res = await request(server).post('/api/auth/register').send({
//     //     name: 'Test One',
//     //     email: 'testtwo@gmail.com',
//     //     password: 1234567,
//     //   });
//     //   expect(res.body).toHaveProperty('token');
//     // });

//     //Second Registration

//     it(' REGISTER| should return an error if email already exist ', async () => {
//       const res = await request(server).post('/api/auth/register').send({
//         name: 'Test One',
//         email: 'testtwo@gmail.com',
//         password: 1234567,
//       });
//       expect(res.status).toBe(400);
//       expect(res.body).toHaveProperty('errors');
//     });

//     it(' REGISTER| should return an error if no name is included', async () => {
//       const res = await request(server).post('/api/auth/register').send({
//         // name: 'Test One',
//         email: 'testtwo@gmail.com',
//         password: 1234567,
//       });
//       expect(res.status).toBe(400);
//       expect(res.body).toHaveProperty('errors');
//     });

//     it(' REGISTER|should return an error if no email is included', async () => {
//       const res = await request(server).post('/api/auth/register').send({
//         name: 'Test One',
//         // email: 'testtwo@gmail.com',
//         password: 1234567,
//       });
//       expect(res.status).toBe(400);
//       expect(res.body).toHaveProperty('errors');
//     });
//     it(' REGISTER|should return an error if no password is included', async () => {
//       const res = await request(server).post('/api/auth/register').send({
//         name: 'Test One',
//         email: 'testtwo@gmail.com',
//         // password: 1234567,
//       });
//       expect(res.status).toBe(400);
//       expect(res.body).toHaveProperty('errors');
//     });

//     it(' LOGIN| should return a token if email and password is included', async () => {
//       const res = await request(server).post('/api/auth/login').send({
//         email: 'testtwo@gmail.com',
//         password: '1234567',
//       });

//       expect(res.status).toBe(200);
//       expect(res.body).toHaveProperty('token');
//     });

//     it(' LOGIN| should return an error if no password is included', async () => {
//       const res = await request(server).post('/api/auth/login').send({
//         email: 'testtwo@gmail.com',
//         // password: '123456',
//       });

//       expect(res.status).toBe(400);
//       expect(res.body).toHaveProperty('errors');
//     });
//     it(' LOGIN| should return a token if nno email is included', async () => {
//       const res = await request(server).post('/api/auth/login').send({
//         // email: 'testtwo@gmail.com',
//         password: '1234567',
//       });

//       expect(res.status).toBe(400);
//       expect(res.body).toHaveProperty('errors');
//     });
//   });

//   describe('GET /', () => {
//     it('GET| CURRENT USER |should get current user', async () => {
//       const res = await request(server)
//         .get('/api/auth/')
//         .set(
//           'x-auth-token',
//           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWVmYWVmZDFhMDM2OTJkMzQ0YTZiMjgiLCJlbWFpbCI6InRlc3R0d29AZ21haWwuY29tIiwiaWF0IjoxNTkyNzY4MDUyfQ.-DC7Ih4ko3yS9WTLNUxlvTYvzgDUnVy9sIM-RB8phJc'
//         );

//       expect(res.status).toBe(200);
//       expect(res.body).toHaveProperty('user');
//     });

//     it('GET|CURRENT USER |should get return error if token is invalid', async () => {
//       const res = await request(server)
//         .get('/api/auth/')
//         .set(
//           'x-auth-token',
//           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWVmYWVmZDFhMDM'
//         );

//       expect(res.status).toBe(400);
//       expect(res.text).toBe('Invalid token');
//     });
//     it('GET| CURRENT USER |should get return error if  no token is included', async () => {
//       const res = await request(server)
//         .get('/api/auth/')
//         .set(
//           'x-auth-token',
//           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWVmYWVmZDFhMDM'
//         );

//       expect(res.status).toBe(400);
//       expect(res.text).toBe('Invalid token');
//       // expect(res.body).toBe({});
//     });
//   });
// });
