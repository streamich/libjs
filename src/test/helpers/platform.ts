import {darwin} from '../..';

export const libjs = process.platform === 'darwin'
    ? darwin
    : darwin;
