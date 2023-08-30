const KEYS = {
  TYPE: "type",
  ATTRIBUTES: "attributes",
  CHILDREN: "children",
};
function createDom(root) {
  //   const fragment = document.createDocumentFragment();
  const rootElement = document.createElement(root[KEYS.TYPE]);

  if (root.hasOwnProperty(KEYS.ATTRIBUTES)) {
    const attributes = root[KEYS.ATTRIBUTES];
    const keys = Object.keys(root[KEYS.ATTRIBUTES]);
    for (const key of keys) {
      rootElement.setAttribute(key, attributes[key]);
    }
  }

  const children = root[KEYS.CHILDREN];

  if (children) {
    for (const item of children) {
      if (typeof item === "string") {
        rootElement.textContent = item;
      } else {
        rootElement.append(createDom(item));
      }
    }
  }

  return rootElement;
}

// createDom({
//   type: "input",
//   attributes: {
//     class: "my-input",
//     type: "password",
//     placeholder: "Type your password",
//   },
// });

const el = createDom({
  type: "p",
  attributes: {
    class: "my-input",
  },
  children: [
    "Hello",
    {
      type: "strong",
      children: [
        "Nicolas",
        {
          type: "h1",
          children: ["Phil"],
        },
      ],
    },
  ],
});

console.log(el);
