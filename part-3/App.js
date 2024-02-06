function App() {
    return (
      <div>
        <Person
          name="Daffy Duck"
          age={32}
          hobbies={["swimming", "laying eggs", "chasing Donald Duck"]}
        />
        <Person 
        name="Sheldon Cooper" 
        age={14} 
        hobbies={["watching Star Wars", "solving math problems", "three dimensional chess"]}
        />
        <Person
          name="Ringo Starr"
          age={75}
          hobbies={["playing drums", "doing drugs", "singing"]}
        />
        <Person
          name="Pippi"
          age={7}
          hobbies={["eating", "chasing chipmunks", "sleeping"]}
        />
      </div>
    );
  }