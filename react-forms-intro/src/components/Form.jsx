const Form = () => {
    
    
    return (
        <>
            <h1>Form</h1>
            <form>
                <label htmlFor="name">Name:
                    <input type="text" id="name"/>
                </label>
                <br />
                <label htmlFor="email">Email:
                    <input type="text" id="email" />
                </label>
                <br />
                <label htmlFor="phone-number">Phone Number:
                    <input type="text" id="phone-number" />
                </label>
                <br />
                <label htmlFor="phone-type">Phone Type:</label>
                <select name="phone-type" id="phone-type">
                    <option value="" disabled>Select a phone type...</option>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="mobile">Mobile</option>
                </select>
                <br />
                <label htmlFor="staff">Staff:
                    <input type="radio" name="staff" value="instructor"/>Instructor
                    <input type="radio" name="staff" value="student"/>Student
                </label>
                <br />
                <label htmlFor="bio">Bio:</label>
                <br />
                <textarea name="bio" id="bio" cols="30" rows="10"></textarea>
                <br />
                <input type="checkbox" name="notification"/>
                <label htmlFor="notification">Sign up for email notifications</label>
                <br />
                <button>Sign Up!</button>
            </form>
        </>
    )
}

export default Form;