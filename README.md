# node-template

This is a template repository for Node.js projects. It includes configuration for:

- TypeScript
- ESLint
- Prettier
- Jest
- Commitlint
- Husky
- Semantic Release
- Dependabot
- GitHub Workflows

## Getting Started

1. Click the "Use this template" button to create a new repository based on this template.

2. Clone the new repository to your local machine

    ```md
    git clone https://github.com/<your-username>/<new-repo>.git
    ```

3. Install dependencies

    ```md
    npm install
    ```

4. Build the project

    ```md
    npm run build
    ```

5. Lint the code

    ```md
    npm run lint
    ```

6. Run tests

    ```md
    npm run test
    ```

## Scripts

- `build` - Compiles TypeScript code to JavaScript
- `build:clean` - Removes old build and compiles fresh build
- `build:dev` - Watches for changes and compiles
- `lint` - Lints code using ESLint
- `lint:fix` - Lints and fixes issues automatically
- `test` - Runs Jest tests
- `test:coverage` - Runs tests and generates coverage report
- `test:watch` - Runs tests in watch mode

## GitHub Workflows

- `Node.js CI/CD` - Runs on push to `main` and `development`. Installs dependencies, builds project, runs linter and tests. Updates package version on `development`. Creates GitHub release on `main`.

- `Auto-comment on PR` - Runs on new or updated PRs. Gathers metrics about PR then posts detailed comment.

## Contributing

Please check the [contribution guide](CONTRIBUTING.md) to learn more about how to contribute to this project.
