const Data = [
    {
      title: 'Components',
      description:
        'The core UI building block - compose the user interface by combining multiple components.',
    },
    {
      title: 'JSX',
      description:
        'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    },
    {
      title: 'Learn React',
      description:'In-depth',
    } ]
  
  export function CourseGoal({title, description}) {
    return (
      <li>
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    );
  }
  
  function App() {
    return (
      <div id="app" data-testid="app">
        <h1>Time to Practice</h1>
        <p>One course, many goals! 🎯</p>
        
        <ul>
          <CourseGoal {...Data[0]} />
          <CourseGoal {...Data[1]} />
          <CourseGoal {...Data[2]} />
          
        </ul>
      </div>
    );
  }
  
  export default App;