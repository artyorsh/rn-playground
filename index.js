import registerRootComponent from 'expo/src/launch/registerRootComponent';

import {AppRegistry} from 'react-native';
import 'core-js/proposals/reflect-metadata';
import { App } from './src/app';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// registerRootComponent(App);
