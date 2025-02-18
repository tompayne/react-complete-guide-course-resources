// import componentsImage from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

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
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts{...CORE_CONCEPTS[1]} 
            />
            <CoreConcepts{...CORE_CONCEPTS[2]}
            />
            <CoreConcepts{...CORE_CONCEPTS[3]}
            />     
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
           <TabButton>Components</TabButton>
           <TabButton>JSX</TabButton>
           <TabButton>Props</TabButton>
           <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
