 module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(?:tsx|ts)$': 'ts-jest',
  },
  testRegex: '((\\.|/)(test|spec))\\.(?:tsx|ts)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
