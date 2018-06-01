import * as tpo from 'third-party-one';

import '../components/common.component';

// This is the 'correct' way to lazy-load a module according to Webpack's
// documentation.  It conforms to the ES6 proposal for native lazy-loading.
import('../components/mostly.common.component').then(mcc => {
    console.log('I have access to the mostly common component here!', mcc);
});

export default 'Hello from App Number One!';