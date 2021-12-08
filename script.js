let txtbox = document.querySelector("#textbox");
        txtbox.addEventListener("input",function(){
            let text = this.value;
            let char = text.length;
            document.getElementById("chars").innerHTML = char;

            let words = text.split(" ");
            document.getElementById("words").innerHTML = words.length;
        })