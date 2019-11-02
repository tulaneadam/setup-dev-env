const setupDevEnv = require('./index');

it('should return the os info for the environment', () => {
    expect(setupDevEnv.os).toBeDefined();
});
