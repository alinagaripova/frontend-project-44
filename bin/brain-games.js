#!/usr/bin/env node

// eslint-disable import/extensions
import { askName } from '../src/cli.js';
import sayHello from '../src/hello.js';

sayHello();
askName();
