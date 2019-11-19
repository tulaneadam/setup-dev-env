jest.mock('./index');
const setupDevEnv = require('./index');
setupDevEnv.getOs.mockResolvedValue({os: 'custome OS'});

it('should return the os info for the environment', async () => {
    /*
    try {
        const ouput = await setupDevEnv();
        expect(ouput.os).toBeDefined();
    } catch (err) {
        expect(err).toThrow(err);
    }
*/
    setupDevEnv.getOs().then(ouput => {
        expect(ouput.os).toBeDefined();
    }).catch(err => expect(err).toThrow(err));
});
