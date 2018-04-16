class Queue{
    constructor(){
      this.items = []
    }
    enqueue(item){
      this.items.push(item)
    }
    
    front(){
      return this.items[0]
    }
    
    dequeue(){
      return this.items.shift()
    }
    
    isEmpty(){
      return this.items.length == 0
    }
    
    show(){
      var str = "";
      for (var i = 0; i < this.items.length; i++)
          str += this.items[i] + " ";
      return str;
    }
  }
  
  let q = new Queue()
  q.enqueue("First")
  q.enqueue("Second")
  q.enqueue("Third")
  
  console.log(q.dequeue())
  console.log( q.show())
  console.log(q.front())