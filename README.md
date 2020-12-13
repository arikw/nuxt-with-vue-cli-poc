# Sharing Components Between Nuxt 2.x And Vue CLI

This is a POC project that demonstrates how components can be developed with an inner `Vue CLI` project and how to make them available to the outer `Nuxt` project.

The purpose is to facilitate the development of independent components, try them out before integrating them in the main project, and provide a standard "how to use" by a live example ("usage file")

## Shared Components Library

The shared components should be located in `components/lib`, preferably in a dedicated folder and with a usage file (`.usage.vue` file extension) that demonstrates how the component should be used.

See `components/lib/nested-list` as an example.

## Components Discover Page

The `Vue CLI `project has an index page [http://localhost:8080/](http://localhost:8080/) that lists all components available in `components/lib` and makes it possible to preview each one of them.

### Usage file

If a component has a usage file (e.g., `NestedList.vue` with `NestedList.usage.vue`), the usage file will be used when clicking on the component in the list

## Install and Run

### Setup

```bash
# install Nuxt dependencies
$ npm install

# install Vue CLI dependencies
$ cd vue-cli
$ npm install
```

#### Notice
`vue-cli/package.json` doesn't include the `vue` package as a dependency because otherwise `webpack` will include both `node_modules/vue` and `vue-cli/node_modules/vue` packages when building the `vue-cli` project.

### Run Nuxt

```bash
# serve with hot reload at localhost:3000
$ npm run dev
```

### Run Vue CLI

```bash
# serve with hot reload at localhost:8080
$ cd vue-cli
$ npm run serve
```

## POC Issues

* A component might be dependent on some packages, so a way to express these dependencies should be developed (a per-component `package.json`?)
