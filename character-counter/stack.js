class Stack{
    constructor(){
      this.items = []
    }
    push(item){
      this.items.unshift(item)
    }
    
    peek(){
      return this.items[0]
    }
    
    pop(){
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
  
  st = new Stack()
  console.log(st.isEmpty())
  st.push("First In")
  st.push("Second In")
  console.log(st.show())
  console.log(st.isEmpty())
  
  console.log(st.pop())