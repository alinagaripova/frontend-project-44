#!/usr/bin/env node

// eslint-disable import/extensions
import { askName } from '../src/cli.js';
import sayHello from '../src/hello.js';
import checkEven from '../src/checkEven.js';

sayHello();
askName();
checkEven();
