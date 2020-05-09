		// TODO: create a handler
        // window.addEventListener("load", function(){
            // TODO: register the handler
        // });
        function setSearchUrl() {
            return document.querySelector("input[name=engine]:checked").value;
        }

        window.addEventListener("load", function() {
            let search = document.querySelector("form");
            search.addEventListener("submit", function(event) {
                search.action = setSearchUrl()
            })
        });
