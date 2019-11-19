const setupDevEnv = require('./index');

it('should return the os info for the environment', async () => {
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
