/*
 * File: main.js
 * Project: _js
 * File Created: Tuesday, 8th September 2020 9:53:42 pm
 * Author: Timo Zacherl
 *
 * -----
 * Last Modified: Thursday, 10th September 2020 8:20:36 pm
 * Modified By: Timo Zacherl
 * -----
 *
 * Copyright © 2020 Timo Zacherl. All rights reserved.
 */

window.addEventListener('load', () => {
  document.querySelectorAll('.runtime-preview').forEach((el) => {
    el.addEventListener('click', () => {
      el.classList.toggle('collapsed');
    });
  });

  const footer = document.querySelector('footer.site-footer');
  footer.innerHTML = `This site is maintained by <a href="https://timozacherl.com">Timo Zacherl</a> and other contributors. Source Code available on <a href="https://github.com/TimoZacherl/swiftdox">GitHub</a> and licensed under the <a href="https://github.com/timozacherl/swiftdox/tree/master/LICENSE">MIT License</a>. It uses <a href="https://github.com/pmarsceill/just-the-docs">Just the Docs</a>.`;
});
