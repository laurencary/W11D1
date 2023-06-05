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

    // userEffect(() => {

    // }, [errors])
    const [errors, setErrors] = useState({
        name: "",
        emailBlank: "",
        phoneValid: "",
        phoneType: "",
        bio: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        validations();
        if (Object.values(errors).filter(e => e !== '').length > 0) {
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
            errors.name = 'Name cannot be blank'
        } else {
            errors.name = ""
        }

        if (user.email === '') {
            errors.emailBlank = 'Email cannot be blank'
        } else {
            errors.emailBlank = ""
        } 
        if (!user.email.includes('@')) {
            errors.emailValid = 'Please add a valid email'
        } else {
            errors.emailValid = ""
        }

        if (user.phoneNumber !== '') {
            var rg = new RegExp('^[0-9]+$');
            if (!rg.test(user.phoneNumber)) {
                errors.phoneNumber = 'Phone number can only contains numbers'
            } else {
                errors.phoneNumber = ''
            }
            if (user.phoneType === '') {
                errors.phoneType = 'Please select a phone type'
            } else {
                errors.phoneType = ''
            }
        }

        if (user.bio.length > 280) {
            errors.bio = 'Bio must be less than 280 characters'
        } else {
            errors.bio = ""
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
                <div className="error">{errors.name}</div>
                <label htmlFor="email">Email:
                    <input type="text"
                        value={user.email}
                        onChange={handleChange("email")} />
                </label>
                <div className="error">{errors.emailBlank}{errors.emailValid}</div>
                <label htmlFor="phone-number">Phone Number:
                    <input type="text"
                        value={user.phoneNumber}
                        onChange={handleChange("phoneNumber")} />
                </label>
                <div className="error">{errors.phoneNumber}</div>
                <label htmlFor="phone-type">Phone Type:</label>
                <select name="phone-type"
                    defaultValue={''}
                    onChange={handleChange("phoneType")}>
                    <option value="" disabled>Select a phone type...</option>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                    <option value="mobile">Mobile</option>
                </select>
                <div className="error">{errors.phoneType}</div>
                <label htmlFor="staff">Staff:
                    <input type="radio" name="staff" value="instructor" onChange={handleChange("staff")} />Instructor
                        < input type="radio" name="staff" value="student" onChange={handleChange("staff")} />Student
                </label>
                <div className="error"></div>
                <label htmlFor="bio">Bio:</label>
                <div className="error"></div>
                <textarea name="bio" cols="30" rows="10"
                    value={user.bio}
                    onChange={handleChange("bio")}></textarea>
                <div className="error">{errors.bio}</div>
                <input type="checkbox"
                    name="notifications"
                    onChange={handleCheckboxChange("notifications")}/>

                <label htmlFor="notification">Sign up for email notifications</label>
                <div className="error"></div>
                <button>Sign Up!</button>
            </form>
        </>
    )
}

export default Form;