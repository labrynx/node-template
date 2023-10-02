"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.tests.json',
        },
    },
    roots: ['<rootDir>/tests'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['tests/**/*.{test,spec}.{ts,tsx}', '!tests/**/*.d.ts'],
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/tests/$1',
    },
};
exports.default = config;
//# sourceMappingURL=jest.config.js.map