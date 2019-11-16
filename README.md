[![Build Status](https://travis-ci.org/kaelzhang/generator-gaia.svg?branch=master)](https://travis-ci.org/kaelzhang/generator-gaia)
[![Coverage](https://codecov.io/gh/kaelzhang/generator-gaia/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/generator-gaia)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/generator-gaia?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/generator-gaia)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/generator-gaia.svg)](http://badge.fury.io/js/generator-gaia)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/generator-gaia.svg)](https://www.npmjs.org/package/generator-gaia)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/generator-gaia.svg)](https://david-dm.org/kaelzhang/generator-gaia)
-->

# generator-gaia

Yeoman generator to create a Gaia project

## Install

```sh
$ npm i -g generator-gaia
```

## Usage

```sh
# It is recommanded to clone the empty repo first,
# `generator-cjs` reads the git remote url and set default prompts values.
git clone git@github.com:my-name/my-empty-repo.git

cd my-empty-repo

yo gaia
```

### Run tests on dev env

```sh
npm run test:dev
```

### Start server

```sh
npm run start
```

Start dev server which will use `.env` as environment variables

```sh
npm run start:dev
```

## License

[MIT](LICENSE)
