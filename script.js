var x = document.getElementById("wordspace");
var decartes = "A man who made some shit up. <button class='btnd' type='button' onclick='changeText(j)'>Go Back</button>";

var array = ["In philosophy, idealism is a diverse group of metaphysical views which all assert that reality is in some way indistinguishable or inseparable from human perception and/or understanding, that it is in some sense mentally constituted, or that it is otherwise closely connected to ideas. In contemporary scholarship, traditional idealist views are generally divided into two groups. Subjective idealism takes as its starting point that objects only exist to the extent that they are perceived by someone. Objective idealism posits the existence of an objective consciousness which exists before and, in some sense, independently of human consciousness, thereby bringing about the existence of objects independently of human minds.",
"  Substance dualism, or Cartesian dualism, most famously defended by <button class='btnd' type='button' onclick='changeTextD()'>René Descartes</button>, argues that there are two kinds of foundation: mental and physical. This philosophy states that the mental can exist outside of the body, and the body cannot think. Substance dualism is important historically for having given rise to much thought regarding the famous mind–body problem.  ",
" Property dualism asserts that an ontological distinction lies in the differences between properties of mind and matter, and that consciousness is ontologically irreducible to neurobiology and physics. It asserts that when matter is organized in the appropriate way (i.e., in the way that living human bodies are organized), mental properties emerge. Hence, it is a sub-branch of emergent materialism. What views properly fall under the property dualism rubric is itself a matter of dispute. There are different versions of property dualism, some of which claim independent categorisation "
]
let i;
let j;
function changeText(i) {
        x.innerHTML = array[i];
        j=i;
    }

    function changeTextD() {
        x.innerHTML = decartes;
    }