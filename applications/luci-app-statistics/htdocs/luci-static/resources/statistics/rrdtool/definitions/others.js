'use strict';
'require baseclass';

return baseclass.extend({
  title: 'Minimal',

  rrdargs(graph, host, plugin, plugin_instance, dtype) {
    const d = dtype || 'value';
    const titleName = plugin_instance && plugin_instance !== '' ? plugin_instance : plugin;

    return {
      /* use plugin_instance (or plugin) for the title */
      title: "%H: " + titleName,

      /* use dtype for the Y axis label and for the data type */
      vlabel: d,
      data: {
        /* declare the data type using the received dtype */
        types: [ d ],

        /* options keyed by the dtype so the series is labeled accordingly */
        options: {
          [d]: { title: "%di" }
        }
      }
    };
  }
});
