import { useState } from "react";


const Form = () => {
    
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        staff: "",
        bio: "",
        notifications: false
    })
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        validations();
        if (errors.length > 0) {
            console.log(errors)
        } else {
            console.table(user);
        }
    }

    const handleChange = (field) => {
        return (e) => {
            setUser({...user, [field]: e.target.value})
        }
    }
    
    const validations = () => {
        if (user.name === '') {
            errors.push('Name cannot be blank')
        }

        if (user.email === '') {
            errors.push('Email cannot be blank')
        } 
        if (!user.email.includes('@')) {
            errors.push('Please add a valid email')
        }

        if (user.phoneNumber !== '') {
            var rg = new RegExp('^[0-9]+$');
            if (!rg.test(user.phoneNumber)) {
                errors.push('Phone number can only contains numbers')
            }
            if (user.phoneType === '') {
                errors.push('Please select a phone type')
            }
        }

        if (user.bio.length > 280) {
            errors.push('Bio must be less than 280 characters')
        }
    }

    const handleCheckboxChange = () => {
        return (e) => {
            setUser({ ...user, notifications: !user.notifications })
        }
    }
    
    return (
        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: 
                    <input type="text" 
                    value={user.name}
                    onChange={handleChange("name")}/>
                </label>
                <br />
                <label htmlFor="email">Email:
                    <input type="text"
                        value={user.email}
                        onChange={handleChange("email")} />
                </label>
                <br />
                <label htmlFor="phone-number">Phone Number:
                    <input type="text"
                        value={user.phoneNumber}
                        onChange={handleChange("phoneNumber")} />
                </label>
                <br />
                <label htmlFor="phone-type">Phone Type:</label>
                <select name="phone-type"
                    defaultValue={''}
                    onChange={handleChange("phoneType")}>
                    <option value="" disabled>Select a phone type...</option>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="mobile">Mobile</option>
                </select>
                <br />
                <label htmlFor="staff">Staff:
                    <input type="radio" name="staff" value="instructor" onChange={handleChange("staff")} />Instructor
                        < input type="radio" name="staff" value="student" onChange={handleChange("staff")} />Student
                </label>
                <br />
                <label htmlFor="bio">Bio:</label>
                <br />
                <textarea name="bio" cols="30" rows="10"
                    value={user.bio}
                    onChange={handleChange("bio")}></textarea>
                <br />
                <input type="checkbox"
                    name="notifications"
                    onChange={handleCheckboxChange("notifications")}/>

                <label htmlFor="notification">Sign up for email notifications</label>
                <br />
                <button>Sign Up!</button>
            </form>
        </>
    )
}

export default Form;