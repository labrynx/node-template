module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.tests.json',
    },
  },
  testEnvironment: 'node',
}
