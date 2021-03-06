# CHANGELOG

<!-- toc -->
### 0.6.0

##### c-3po lib:
Implemented useLocales method [PR](https://github.com/c-3po-org/c-3po/pull/71)

##### c-3po-plugin
Validation fix for the computed properties [PR](https://github.com/c-3po-org/babel-plugin-c-3po/issues/90)

### 0.5.8
Fixes for fuzzy translations issue - [68](https://github.com/c-3po-org/c-3po/issues/68)

##### c-3po-plugin
Validation fix for the computed properties [PR](https://github.com/c-3po-org/babel-plugin-c-3po/issues/90)

### 0.5.7
##### c-3po-plugin
Validation fix for the computed properties [PR](https://github.com/c-3po-org/babel-plugin-c-3po/issues/90)

### 0.5.6
##### c-3po-plugin
Add validation for variable expressions mismatch. [PR](https://github.com/c-3po-org/babel-plugin-c-3po/pull/84)

### 0.5.5

##### c-3po lib:
Fix for multiline translations. [PR](https://github.com/c-3po-org/c-3po/pull/67)

### 0.5.4
##### c-3po-plugin
Fixed extraction for member expressions with computed properties. [PR](https://github.com/c-3po-org/babel-plugin-c-3po/pull/86)

##### c-3po lib:
Removed module attribute from package.json.

### 0.5.3
##### c-3po-plugin
Fix for member expressions extraction with `this`. (checkout [PR](https://github.com/c-3po-org/babel-plugin-c-3po/pull/82) for the details)

### 0.5.2
##### c-3po-plugin
Fix for `ngettext` validation in jsx (multiple presets [issue](https://github.com/c-3po-org/babel-plugin-c-3po/pull/81)). 
### 0.5.1
##### c-3po lib:
Renamed `setHeaders` to `setDefaultHeaders` for consistency with babel plugin setting.
##### c-3po-plugin
Applied sort for file references. Can be handy for avoiding merge conflicts.

### 0.5.0
---------
1. Default headers setup - [doc](/configuration-c-3po-lib.html#setheaders-object-headers)
2. Multiline support for c-3po lib + setDedent setting - [doc](/configuration-c-3po-lib.html#setdedent-bool-value)
3. Tutorial about [development and production setup with c-3po and webpack](/localization-with-webpack-and-c-3po.html)
4. Removed `nt`from the core lib.
5. `pkg.module` support (details [here](https://github.com/rollup/rollup/wiki/pkg.module))

Migration guide - [from 0.4.x to 0.5.x](/MIGRATION.html#from-04x-to-05x)


### 0.4.x
Extracted format changed from `${ 0 }` to `${ name }`.