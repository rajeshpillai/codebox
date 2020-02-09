// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;

  var onKeyup = debounce(function() {
    code.open();
    code.writeln(`
      ${html.value} 
      <style> 
        css.value 
      </style> 
      <script type="text/javascript" src="lib/babel.min.js"></script>
      <script type="text/javascript" src="lib/react.min.js"></script>
      <script type="text/javascript" src="lib/react-dom.min.js"></script>
      <script type='text/babel'  charset='utf-8'>
        ${js.value} 
      </script>
    `);
    code.close();
  
  }, 250);


  document.body.onkeyup = onKeyup;
}

compile();