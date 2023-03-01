'use strict';

// Random values must be imported first for security.
import '@ethersproject/shims';

import 'text-encoding';
import '@azure/core-asynciterator-polyfill';
import 'react-native-polyfill-globals/auto';

// Necessary for @peculiar/webcrypto.
if (!global.Buffer) {
    global.Buffer = require('safe-buffer').Buffer;
}
import { Crypto as WebCrypto } from '@peculiar/webcrypto';
if (!global.crypto.subtle) {
    // Only polyfill SubtleCrypto as we prefer `react-native-get-random-values` for getRandomValues.
    const webCrypto = new WebCrypto();
    global.crypto.subtle = webCrypto.subtle;
}
