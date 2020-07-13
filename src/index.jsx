import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import Root from 'src/components/Root/Root';

import * as serviceWorker from 'src/serviceWorker';

import 'src/index.css';

render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.querySelector('[data-id="root"]')
);

serviceWorker.register();
