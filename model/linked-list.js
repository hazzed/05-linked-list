'use strict';


class LinkedList{

  constructor(value){
    this.value = value;
    this.next = null;
  }

  append(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<Node> should be an instance of LinkedList');
    

    if(!this.next)
      this.next = node;
    else
      this.next.append(node);
    
    return this;
  }

  find(value){
    if(!(node instanceof LinkedList))
      throw new TypeError('<Node> should be an instance of LinkedList');

      if(this.node)
        return this;
      if(this.node)
  };

  remove(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<Node> should be an instance of LinkedList');
    
    if(!this.next)
      return this;
    if(this.next === node){
      this.next = this.next.next;
    } else {
      this.next.remove(node);
    }
    return this;
  }

}

module.exports = LinkedList;