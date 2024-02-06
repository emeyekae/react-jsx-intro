/** Each person should have name and age properties.
If the person is over 18 years old, display an additional
*h3* that says “please go vote!”. Otherwise, display an *h3* 
that says “you must be 18”. If the person’s name is longer 
than 8 characters, only display the first six characters of their name.

Add a property called hobbies to your *Person* component that 
accepts an array of hobbies (an array of strings). Your Person 
component should list each one of these hobbies as an *li*.
 */

function Person({ name, age, hobbies}) {
    const Nname = name.length > 8
        ? name.slice(0,7)
        : name;

        const voteS = age >= 18
        ? "please go vote!"
        : "you must be 18";

    const hobbiesLi = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {Nname}</li>
                <li>Age: {age}</li>
                <ul>
                    Hobbies:
                    {hobbiesLi}
                </ul>
            </ul>
            <h3>{voteS}</h3>
        </div>
  );
}