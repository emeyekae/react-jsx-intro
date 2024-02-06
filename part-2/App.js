function App() {
    return (
        <div>
            <Tweet
                username="mkaleski   "
                name="Michael Kaleski   "
                date={new Date().toDateString()}
                message='   "X" is the company formerly known as "Twitter"'
            />
            <Tweet
                username="jbagofdonuts   "
                name="Joey Bagofdonuts   "
                date={new Date().toDateString()}
                message="   I will gladly pay you Tuesday for a donut today"
            />
            <Tweet
                username="rwitterspoon   "
                name="Rene Witterspoon   "
                date={new Date().toDateString()}
                message="   Do you known my name?"
            />
        </div>
    );
}   