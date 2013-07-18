/* Class LinkedList - developed by bugnatto;
 *
 *  
 */

function LinkedList () {
    this.head = null;
};


LinkedList.prototype.add = function (value) {

    var node = {
        value: value,
        next: null
    };

    if (null === this.head) {
        this.head = node;
    } else {
        var aux = this.head;
        while (aux.next) {
            aux = aux.next;
        }
        aux.next = node;
    }
};


LinkedList.prototype.print = function () {
    
    var aux = this.head;
    while (aux) {
        console.log(aux.value);
        aux = aux.next;
    }
};


LinkedList.prototype.search = function (value) {
    
    var find = false;
    var aux = this.head;
    while (aux) {
        if (value === aux.value) {
            find = true
        }
        aux = aux.next;
    }

    return find;
};


LinkedList.prototype.remove = function (value) {

    if (null === this.head) {
        return;
    }
        
    var aux = this.head;
    if (value === this.head.value) {
        this.head = aux.next;
        aux.net = null;
    } else {
        var aux = this.head;
        var ant = aux;
        while (aux) {
            if (value === aux.value) {
                ant.next = aux.next;
                aux.next = null;
                return;
            }
            ant = aux;
            aux = aux.next;
        }
    }
}; 


LinkedList.prototype.factory = function (value) {
    return {
               value: value,
               next: null
           }
};


/* main */
var list = new LinkedList();

list.add('1');
list.add('2');
list.add('3');

list.print();

list.remove('3');
list.remove('1');

list.print();


