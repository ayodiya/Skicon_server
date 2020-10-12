const request = require('supertest');
let server;

describe('api/profile/', () => {
  beforeEach(() => {
    {
      server = require('../../server');
    }
  });
  afterEach(() => {
    server.close();
  });

  describe('GET /', () => {
    // it('GET  /me |should get current user profile', async () => {
    //   const msg = { msg: 'There is no profile for this user' };
    //   const res = await request(server)
    //     .get('/api/profile/me')
    //     .set(
    //       'x-auth-token',
    //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWVmYWVmZDFhMDM2OTJkMzQ0YTZiMjgiLCJlbWFpbCI6InRlc3R0d29AZ21haWwuY29tIiwiaWF0IjoxNTkyNzY4MDUyfQ.-DC7Ih4ko3yS9WTLNUxlvTYvzgDUnVy9sIM-RB8phJc'
    //     );
    //   expect(res.status).toBe(400);
    //   expect(res.body).toEqual(msg);
    // });
    // it('GET  /me |should get current user profile', async () => {
    //   const msg = { msg: 'There is no profile for this user' };
    //   const res = await request(server).get('/api/profile');
    //   console.log('this is response', res);
    //   expect(res.status).toBe(200);
    //   expect(res.body).toEqual(msg);
    // });
  });

  describe('POST /', () => {
    it('Profile  /create |should create profile for current user ', async () => {
      const msg = {
        company: 'testt company',
        location: 'test location',
        postion: 'test postion',
        website: 'testwebsite.com',
        aboutme: 'i am the grestest of of all times',
        skills: 'node, react',
        twitter: 'twitter.com/testone',
        github: 'github.com/tetone',
        facebook: 'facebook.com/testone',
        linkedin: 'linkedin.com/in/testone',
      };

      const recieved = {
        aboutme: 'i am the grestest of of all times',
        company: 'testt company',
        email: 'testtwo@gmail.com',
        location: 'test location',
        name: 'Test One',
        postion: 'test postion',
        skills: [' node', ' react'],
        social: {
          facebook: 'https://facebook.com/testone',
          github: 'https://github.com/tetone',
          linkedin: 'https://linkedin.com/in/testone',
          twitter: 'https://twitter.com/testone',
        },
        user: '5eefaefd1a03692d344a6b28',
        website: 'https://testwebsite.com',
      };
      const res = await request(server)
        .post('/api/profile/create')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWVmYWVmZDFhMDM2OTJkMzQ0YTZiMjgiLCJlbWFpbCI6InRlc3R0d29AZ21haWwuY29tIiwiaWF0IjoxNTkyNzY4MDUyfQ.-DC7Ih4ko3yS9WTLNUxlvTYvzgDUnVy9sIM-RB8phJc'
        )
        .send(msg);
      expect(res.status).toBe(200);
      expect(res.body).toEqual(expect.objectContaining(recieved));
    });
  });

  describe('PUT /', () => {
    it('Profile  /education |should add education for current user ', async () => {
      const msg = {
        fieldofstudy: 'English language',
        degree: 'B.A',
        school: 'Obafemi Awolowo University',
      };

      const recieved = {
        school: 'Obafemi Awolowo University',
        degree: 'B.A',
        fieldofstudy: 'English language',
      };

      const res = await request(server)
        .put('/api/profile/education')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWVmYWVmZDFhMDM2OTJkMzQ0YTZiMjgiLCJlbWFpbCI6InRlc3R0d29AZ21haWwuY29tIiwiaWF0IjoxNTkyNzY4MDUyfQ.-DC7Ih4ko3yS9WTLNUxlvTYvzgDUnVy9sIM-RB8phJc'
        )
        .send(msg);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty(
        'education',
        expect.arrayContaining([expect.objectContaining(recieved)])
      );
    });
  });
});
