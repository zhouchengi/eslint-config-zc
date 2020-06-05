# eslint-config-zc

eslint config for zc

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-config-zc`:

```
$ npm install eslint-config-zc --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-config-zc` globally.

## Usage

Add `zc` to the config section of your `.eslintrc` configuration file. You can omit the `eslint-config-` prefix:

### Normal

```json
{
  "extends": ["zc"]
}
```

### React

```json
{
  "extends": ["zc", "zc/react"]
}
```

### Vue

```json
{
  "extends": ["zc", "zc/vue"]
}
```

### TypeScript

```json
{
  "extends": ["zc", "zc/typescript"]
}
```

### TypeScript React

```json
{
  "extends": ["zc", "zc/react", "zc/typescript"]
}
```
