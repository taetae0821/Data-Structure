class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
} // Node

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
    this.tail = this.tail;
  }

  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error("범위를 확인하세요. ");
    }

    let newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      if (this.head != null) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else if (index === this.count) {
      newNode.next = null;
      newNode.prev = this.tail;
      this.tail.next = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      newNode.prev = currentNode;
      currentNode.next = newNode;
      newNode.next.prev = newNode;
    }

    if(newNode.next == null){
        this.tail = newNode;
    }

    this.count++;
  } //insertAt

  printAll() {
    let currentNode = this.head;
    let text = "[";
    while (currentNode != null) {
      //   console.log(currentNode.data);
      text += currentNode.data;

      currentNode = currentNode.next;
      if (currentNode != null) {
        text += ", ";
      }
    } //while
    text += "]";
    console.log(text);
  } //printAll

  clear() {
    this.head = null;
    this.count = 0;
  } //clear

  insertLast(data) {
    this.insertAt(this.count, data);
  } //insertLast

  deleteAt(index) {
    if (index < 0 || index >= this.count) {
      throw new Error("제거할 수 없습니다. ");
    }

    let currentNode = this.head;

    if (index === 0) {
      let deleteNode = this.head;

      if (this.head.next === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.count--;
      return deleteNode;
    } else if (index === this.count - 1) {
      let deleteNode = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.count--;
      return deleteNode;
      //마지막 노드를 제거
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      let deleteNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode;
      this.count--;
      return deleteNode;
    }
  } //deleteAt

  deleteLast() {
    return this.deleteAt(this.count - 1);
  } //deleteLast

  getNodeAt(index) {
    if (index < 0 || index >= this.count) {
      throw new Error("범위를 벗어났습니다. ");
    }

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  } //getNodeAt()
}

export { Node, DoubleLinkedList };
