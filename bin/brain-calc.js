#!/usr/bin/env node

// eslint-disable import/extensions
import { askName } from '../src/cli.js';
import sayHello from '../src/hello.js';
import calc from '../src/games/calc.js';

sayHello();
askName();
calc();
