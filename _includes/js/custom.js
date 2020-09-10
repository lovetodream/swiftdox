/*
 * File: main.js
 * Project: _js
 * File Created: Tuesday, 8th September 2020 9:53:42 pm
 * Author: Timo Zacherl
 *
 * -----
 * Last Modified: Thursday, 10th September 2020 5:54:30 pm
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
});
