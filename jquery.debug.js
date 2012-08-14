/**
 * Dreditor debugging helper.
 *
 * @usage
 *   $.debug(var [, name]);
 *   $variable.debug( [name] );
 */

(function ($) {
  $.fn.debug = function () {
    // Initialize window.debug storage, to make debug data accessible later
    // (e.g., via browser console). Although we are going to possibly store
    // named keys, this needs to be an Array, so we can determine its length.
    window.debug = window.debug || [];

    var args = jQuery.makeArray(arguments);
    // Determine data source; this is an object for $variable.debug().
    // Also determine the identifier to store data with.
    if (typeof this == 'object') {
      var name = (args.length ? args[0] : window.debug.length);
      var data = this;
    }
    else {
      var name = (args.length > 1 ? args.pop() : window.debug.length);
      var data = args[0];
    }
    // Store data.
    window.debug[name] = data;
    // Dump data into Firebug console.
    if (console !== undefined) {
      console.log(name, data);
    }
    return this;
  };
})(jQuery);
