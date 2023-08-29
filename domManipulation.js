const secondLi = document.getElementById("second-li");
const listItems = document.querySelectorAll("li");

const scrollableC = document;

const dom1 = document.createElement("div");
const stack = [];
dom1.innerHTML = `
  <main>
    <h1>Heading</h1>
    <div>
        <h2>Test 1</h2> 
        <p>Tester <em>emphasis</em></p>
    </div>
  </main>
 `;

const ch = [dom1].pop().children;
console.log("stack=", ch);
stack.push(...ch);
