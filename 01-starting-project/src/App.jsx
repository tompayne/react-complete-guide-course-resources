// import componentsImage from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { Component, useState } from 'react';
import { EXAMPLES } from './data.js';

// function CoreConcepts(props) {
//   return (
//     <li>
//       <img src= {props.image} alt={props.title}/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }
  
//also this way

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('components'); //default value is components
  
  function handleSelect(selectedButton) {   
    setSelectedTopic(selectedButton);
    //console.log (selectedButton);
  }

  let tabContent = "Please select a topic to learn more about it.";

  if (selectedTopic) {      
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            {CORE_CONCEPTS.map((conceptItem) => ( //can be used to iterate over array
              <CoreConcepts key = {conceptItem.title} {...conceptItem} />
            ))}      
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
           </section>
      </main>
    </div>
  );
}

export default App;
