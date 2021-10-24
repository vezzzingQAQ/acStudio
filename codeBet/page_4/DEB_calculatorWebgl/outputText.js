function output(ifunction,cfunction){
    var textTemp=
    `&#60;!DOCTYPE html&#62;
    &#60;html&#62;
        &#60;head&#62;
        &#60;meta charset="utf-8"&#62;
        &#60;meta name="viewport" content="width=device-width, initial-scale=1.0"&#62;
        &#60;title&#62;VZ&#60;/title&#62;
        &#60;style&#62;
            body {
                padding: 0;
                margin: 0;
                overflow: hidden;
            }
            .cet{
                position: absolute;
                left: 10px;
                top: 10px;
            }
            body::-webkit-scrollbar{
                display: none;
            }            
        &#60;/style&#62;
        &#60;script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js" integrity="sha512-N4kV7GkNv7QR7RX9YF/olywyIgIwNvfEe2nZtfyj73HdjCUkAfOBDbcuJ/cTaN04JKRnw1YG1wnUyNKMsNgg3g==" crossorigin="anonymous" referrerpolicy="no-referrer"&#62;&#60;/script&#62;        
        &#60;script&#62;
        function setup() {
            //by vezzzingQAQ;
            //https://vezzzingqaq.github.io/acStudio/mainPage/mainPage_1.html;
            createCanvas(windowWidth, windowHeight);
            smooth();
        }

        function windowResized() {
            resizeCanvas(windowWidth,windowHeight);
        }

        function draw() {
            translate(width/2,height/2);
            background(0);
            noStroke();
            rectMode(CENTER);
            try{
                for(var x=-300;x&#60;300;x+=10){
                    for(var y=-300;y&#60;300;y+=10){
                        var z=eval(${ifunction});
                        ${cfunction};
                    }
                }
            }catch{
                fill(255);
                text("error",0,0);
            }
        }           
        &#60;/script&#62;
        &#60;/head&#62;
    
        &#60;body&#62;
        &#60;main&#62;
            
        &#60;/main&#62;
        &#60;/body&#62;
    &#60;/html&#62;
    `
    textTemp=textTemp.replace(/\n/g,"<br/>");
    return(textTemp);
}