import {AppRegistry} from 'react-native';
import 'core-js/proposals/reflect-metadata';
import { App } from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
