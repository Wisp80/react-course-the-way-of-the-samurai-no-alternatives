import {run as analyticsRun} from '../analytics.js';

export function runPlayer() {
    console.log("player started");
    analyticsRun();
}

export function run() {
    console.log("run playlist");
}