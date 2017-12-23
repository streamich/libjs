import {Arr} from '../typebase';
import timeval, {Itimeval} from './timeval';

const timevalarr = Arr.define(timeval, 2);

export type Itimevalarr = [Itimeval, Itimeval];

export default timevalarr;
