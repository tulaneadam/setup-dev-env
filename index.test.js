const setupDevEnv = require('./index');

// To mock the module, enable next 2 lines
jest.mock('./index');
setupDevEnv.mockResolvedValue({os: 'custom OS'});

it('should return the os info for the environment', () => {
    /*
    try {
        const ouput = await setupDevEnv();
        expect(ouput.os).toBeDefined();
    } catch (err) {
        expect(err).toThrow(err);
    }
*/
    setupDevEnv().then(ouput => {
        expect(ouput.os).toBeDefined();
    }).catch(err => expect(err).toThrow(err));
});
