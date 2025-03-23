fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

### native

```sh
[bundle exec] fastlane native
```

Builds native apps and stores them in the `./build` folder

Parameters:

- env - environment to use. This will switch local environment and replace .env file with one from ./env dir. **Defaults to what is in current .env file**

- build_number - build number

Output:

The result of the command is a `./build/android` folder in the project root containing build artifacts:

- .apk or .aab

- source maps

----


## Android

### android native

```sh
[bundle exec] fastlane android native
```



### android version

```sh
[bundle exec] fastlane android version
```



----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
