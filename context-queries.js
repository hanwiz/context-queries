function context(){
    [].forEach.call(document.querySelectorAll("[breakpoints]"), function(el) {
      
        // Reset context class
        if(el.getAttribute("class") !== null){
            var classes = el.getAttribute("class").split(" ");
            classes.forEach(function(val) {
                if (val.substring(0, 2) == "lt" || val.substring(0, 2) == "gt" || val.substring(0, 2) == "eq") {
                        el.classList.remove(val);
                }
            });
        }
          
        // Set context class
        var w = el.offsetWidth;
        var breakpoints = el.getAttribute("breakpoints").split(" ");
        breakpoints.forEach(function(val) {
              if (w < parseFloat(val)){
                    el.classList.add("lt" + val);
              }else if (w > parseFloat(val)){
                    el.classList.add("gt" + val);
              }else{
                    el.classList.add("eq" + val);
              }
        });
      
    });
}

context();

window.addEventListener('resize', function() {
    context();
});
