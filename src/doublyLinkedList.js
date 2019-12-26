
function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
  }
  
  function DoublyList() {
    this._length = 0;
    this.head = null;
    this.tail = null;
  }
  
  DoublyList.prototype.add = function(value) {
    var node = new Node(value);
  
    if (this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
  
    this._length++;
  
    return node;
  };
  
  const lunarPhases = new DoublyList("new-moon");
  lunarPhases.add("waxing-crescent");
  lunarPhases.add("first-quarter");
  lunarPhases.add("waxing-gibbous");
  lunarPhases.add("full-moon");
  lunarPhases.add("waning-gibbous");
  lunarPhases.add("last-quarter");
  lunarPhases.add("waning-crescent");