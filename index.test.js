const setupEnv = require('./index');

it('should return the os info for the environment', () => {
    expect(setupEnv().os).toBeDefined();
});