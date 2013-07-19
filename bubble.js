var list1 = [0, -1, 3, 0, -10, 1, 2, -2];
var list2 = [8, 7, 6, 5, 4, 3, 2, 1];
var list3 = [1, 2, 3, 4, 5, 6, 7, 8];
 
function BubbleSort (list) {
    var swap = 0;
    var comp = 0;
    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list.length-1; j++) {
            comp++;
            if (list[j] > list[j+1]) {
                var temp = list[j+1];
                list[j+1] = list[j];
                list[j] = temp;
                console.log(list);
                swap++;
            }
        }
    }
    console.log("Comparacoes = ", comp);
    console.log("Trocas = ", swap);
}

var list = list1;
console.log(list); 
BubbleSort(list);
