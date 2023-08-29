function correspondingNode(tree1, tree2, node1) {
  const stack1 = [tree1];
  const stack2 = [tree2];

  while (stack1.length > 0) {
    const currNode1 = stack1.pop();
    const currNode2 = stack2.pop();
    if (currNode1 === node1) {
      return currNode2;
    }

    console.log("currNode1=", currNode1);
    console.log("currNode2=", currNode2);
    stack1.push(...currNode1.children);
    stack2.push(...currNode2.children);
  }
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

cconsole.log(orrespondingNode(dom1, dom2, dom1));
