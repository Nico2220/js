// solution 1
function correspondingNode(tree1, tree2, node1) {
  const stack1 = [tree1];
  const stack2 = [tree2];

  while (stack1.length > 0) {
    const currNode1 = stack1.pop();
    const currNode2 = stack2.pop();
    if (currNode1 === node1) {
      return currNode2;
    }

    stack1.push(...currNode1.children);
    stack2.push(...currNode2.children);
  }
}

// solution 2
function correspondingNodeV2(tree1, tree2, node1) {
  const path = [];
  let currentNode = node1;
  while (currentNode !== tree1) {
    const parent = currentNode.parentNode;
    const currenIndex = Array.from(parent.children).indexOf(currentNode);
    path.push(currenIndex);
    currentNode = parent;
  }

  const r = path.reduceRight((foundNode, childIndex) => {
    return foundNode.children[childIndex];
  }, tree2);

  console.log("r=", r);
}

const dom1 = document.createElement("div");
dom1.innerHTML = `
  <main>
    <h1>Heading</h1>
    <div>
        <h2>Test 1</h2> 
        <p>Tester <em>emphasis</em></p>
    </div>
  </main>
 `;

const dom2 = document.createElement("main");
dom2.innerHTML = `
 <article>
    <h1>Heading</h1>
    <section>
        <img src="" alt="image"> 
        <h3>Tester 5 <strong>strong</strong></h3>
    </section>
  </article>
 `;

console.log(correspondingNodeV2(dom1, dom2, dom1.querySelector("h2")));
