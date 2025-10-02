class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}
class doublylist{
    constructor(){
        this.head=null
        this.tail=null
    }
    prepend(value){
        const node = new Node(value)
        if(this.head===null){
            this.head=this.tail=node
            return
        }
        node.next=this.head
        this.head.prev=node
        this.head=node
    }
    append(value){
        const node = new Node(value)
        if(this.head===null){
            this.head=this.tail=node
            return
        }
        this.tail.next=node
        node.prev=this.tail
        this.tail=node
    }
    insert(index,value){
        const node=new Node(value)
        if(index===0){
            this.prepend(value)
        }
        let i=0
        let curr = this.head
        while(curr!==null&&i<index-1){
            curr=curr.next
            i++
        }
        if(curr.next===null){
            this.append(value)
            return
        }
        node.next=curr.next
        node.prev=curr
        curr.next.prev=node
        curr.next=node
    }
    remove(index){
    if(this.head===null) return null
    if(index===0){
        if(this.head===this.tail){
            this.head=this.tail=null
            return
        }else{
            this.head=this.head.next
            this.head.prev=null
            return
        }
    }
    let i=0
    let curr = this.head
    while(curr!==null&&i<index){
        curr=curr.next
        i++
    }
    if(curr===null) return null
    if(curr===this.tail){
        this.tail=curr.prev
        this.tail.next=null
        return
    }
    curr.prev.next=curr.next
    curr.next.prev=curr.prev

    }
    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr =curr.next
        }
    }
}
const list = new doublylist()
list.prepend(10)
list.insert(1,20)
list.append(30)
list.print()
list.remove(2)
list.print()