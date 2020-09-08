/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Routers from './src/navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routers);
