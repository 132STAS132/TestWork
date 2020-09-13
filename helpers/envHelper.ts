import allureReporter from '@wdio/allure-reporter';
import { webDriver } from '../core/wdio';
import * as os from 'os';

class EnvHelper {
  setEnvironment(language = '(en-US) English') {
    const browserEnv = webDriver.getBrowserEnvironment();
    allureReporter.addEnvironment('OS', `${os.type()} - ${os.release()}`);

    if (browserEnv.name) {
      allureReporter.addEnvironment(
        'Browser',
        `${browserEnv.name} - ${browserEnv.version}`,
      );
    }
    allureReporter.addEnvironment('Language', language);
  }
}

export const environment = new EnvHelper();
