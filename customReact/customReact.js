// function customRender(reactElement, container) {
//   const domElement = document.createElement(reactElement.type);

//   domElement.textContent = reactElement.children; // Using textContent instead of innerHTML

//   domElement.setAttribute('href', reactElement.props.href);
//   domElement.setAttribute('target', reactElement.props.target); // Fixing this line

//   container.appendChild(domElement);
// }



function customRender(reactElement,container){
  const domElement=document.createElement(reactElement.type)
  domElement.textContent=reactElement.children
  for (const prop in reactElement.props) {
   if(prop==='children') continue;
domElement.setAttribute(prop,reactElement.props[prop])
  }
   container.appendChild(domElement)
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'click me to visit google'
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
