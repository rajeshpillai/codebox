function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var code = document.getElementById("code").contentWindow.document;

  document.body.onkeyup = function() {
    console.log(js.value);
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
  };
}

compile();