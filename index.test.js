const setupDevEnv = require('./index');

// To mock the module, enable next 2 lines
//jest.mock('./index');
//setupDevEnv.mockResolvedValue({os: 'custom OS'});

it('should return the os info for the environment', () => {
    /*
    try {
        const output = await setupDevEnv();
        expect(output.os).toBeDefined();
    } catch (err) {
        expect(err).toThrow(err);
    }
*/
    setupDevEnv().then(output => {
        expect(output.os).toBeDefined();
    }).catch(err => expect(err).toThrow(err));
});
