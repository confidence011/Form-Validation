import { useState} from 'react';
import './FormVal.css';

const initialState = {
    UserName: '',
    FirstName: '',
    LastName: '',
    Email: '',
    DateOfBirth: '',
    TiMe: '',
    gender: '',
    StateOfOrigin: '',
    PassWord: '',
    ComfirmPassword: ''
};

//gender selection
const Gender = [
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'},
    {id: 3, name: 'Custom'}
];


//state of origin
const State = [
    {id: 1, name: 'Abia'},
    {id: 2, name: 'Adamawa'},
    {id: 3, name: 'Akwa Ibom'},
    {id: 4, name: 'Anambra'},
    {id: 5, name: 'Bauchi'},
    {id: 6, name: 'Bayelsa'},
    {id: 7, name: 'Benue'},
    {id: 8, name: 'Borno'},
    {id: 9, name: 'Cross River'},
    {id: 10, name: 'Delta'},
    {id: 11, name: 'Ebonyi'},
    {id: 12, name: 'Edo'},
    {id: 13, name: 'Ekiti'},
    {id: 14, name: 'Enugu'},
    {id: 15, name: 'Gombe'},
    {id: 16, name: 'Imo'},
    {id: 17, name: 'Jigawa'},
    {id: 18, name: 'Kaduna'},
    {id: 19, name: 'Kano'},
    {id: 20, name: 'Kastina'},
    {id: 21, name: 'Kebbi'},
    {id: 22, name: 'Kogi'},
    {id: 23, name: 'Kwara'},
    {id: 24, name: 'Lagos'},
    {id: 25, name: 'Nassarawa'},
    {id: 26, name: 'Niger'},
    {id: 27, name: 'Ogun'},
    {id: 28, name: 'Ondo'},
    {id: 29, name: 'Osun'},
    {id: 30, name: 'Oyo'},
    {id: 31, name: 'Platue'},
    {id: 32, name: 'Rivers'},
    {id: 33, name: 'Sokoto'},
    {id: 34, name: 'Taraba'},
    {id: 35, name: 'Yobe'},
    {id: 36, name: 'Abuja'}

];
const FormValidation = () => {

    const [FormValue, setFormValue] = useState(initialState);

    //de-structure in react jsx
    const {UserName, FirstName, LastName, Email, DateOfBirth, TiMe, gender, StateOfOrigin, PassWord, ComfirmPassword} = FormValue;

    //error handling
    const [Errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormValue({...FormValue, [e.target.name]: e.target.value});
    };

    const validate = () => {
        let newErrors = {};

        //validating for username
        if (!UserName) {
            newErrors.UserName = "Username is required";
        }
        if (!FirstName) {
            newErrors.FirstName = "First name is required";
        }
        if (!LastName) {
            newErrors.LastName = "Last name is required";
        }
        if (!Email) {
            newErrors.Email = "Email is required";
        }
        if (!DateOfBirth) {
            newErrors.DateOfBirth = "DOB is required";
        }
        if (!TiMe) {
            newErrors.TiMe = "Time is required";
        }
        if (!gender) {
            newErrors.gender = "Gender is required";
        }
        if (!StateOfOrigin) {
            newErrors.StateOfOrigin = "State of origin is required";
        }
        if (!PassWord) {
            newErrors.PassWord = "Password is required";
        }else if (PassWord.length <6) {
            newErrors.PassWord = "Password must be aleast 6 characters long";
        }
        if (!ComfirmPassword) {
            newErrors.ComfirmPassword = "Please comfirm your password";
        }else if (ComfirmPassword !== PassWord) {
            newErrors.ComfirmPassword = "Password do not match"
        }

        setErrors(newErrors);

        //return through if there are no errors
        return Object.keys(newErrors).length === 0;
        
    };

    const  handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            //for submission
            console.log('Form submitted:', FormValue);
            setFormValue(initialState);
        }
    };

  return (
    
      <form className='form' onSubmit={handleSubmit}>

            <h2>FORM VALIDATION</h2>
  
      
            <div className="form-group">
                <label>Username</label>
                <input
                 type="text"
                 name="UserName"
                 placeholder="username"
                 value={UserName}
                 onChange={handleChange}
                />
                 {Errors.UserName && <span className='error'>{Errors.UserName}</span>}
            </div>
           

            <div className="form-group">
                <label>First Name</label>
                <input
                 type="text"
                 name="FirstName"
                 placeholder="first name"
                 value={FirstName}
                 onChange={handleChange}
                />
                 {Errors.FirstName && <span className='error'>{Errors.FirstName}</span>}
            </div>
            
            <div className="form-group">
                <label>Last Name</label>
                <input
                 type="text"
                 name="LastName"
                 placeholder="last name"
                 value={LastName}
                 onChange={handleChange}
                />
                 {Errors.LastName && <span className='error'>{Errors.LastName}</span>}
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                 type="email"
                 name="Email"
                 placeholder="email"
                 value={Email}
                 onChange={handleChange}
                />
                 {Errors.Email && <span className='error'>{Errors.Email}</span>}
            </div>

            <div className="form-group">
                <label>Date Of Birth</label>
                <input
                 type="date"
                 name="DateOfBirth"
                 placeholder="date of birth"
                 value={DateOfBirth}
                 onChange={handleChange}
                />
                 {Errors.DateOfBirth && <span className='error'>{Errors.DateOfBirth}</span>}
            </div>

            <div className="form-group">
                <label>Time</label>
                <input
                 type="time"
                 name="TiMe"
                 placeholder="time"
                 value={TiMe}
                 onChange={handleChange}
                />
                 {Errors.TiMe && <span className='error'>{Errors.TiMe}</span>}
            </div>

            <div className="form-group">
                <select name="gender" value={gender} onChange={handleChange}>
                    <option value="" disabled> -- choose gender-- </option>
                    {Gender.map((e)=>(
                    <option key={e.id} value={e.name}>
                        {e.name}
                    </option>
                    ))}
                </select>
                {Errors.gender && <span className='error'>{Errors.gender}</span>}
            </div>

            <div className="form-group">
                <select name="state of origin" value={StateOfOrigin} onChange={handleChange}>
                    <option value="" disabled> -- state of origin -- </option>
                    {State.map((e)=>(
                    <option key={e.id} value={e.name}>
                        {e.name}
                    </option>
                    ))}
                </select>
                <div>

                {Errors.StateOfOrigin && <span className='error'>{Errors.StateOfOrigin}</span>}
                </div>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                 type="password"
                 name="PassWord"
                 placeholder="password"
                 value={PassWord}
                 onChange={handleChange}
                />
                 {Errors.PassWord && <span className='error'>{Errors.PassWord}</span>}
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input
                 type="password"
                 name="ComfirmPassword"
                 placeholder="comfirm password"
                 value={ComfirmPassword}
                 onChange={handleChange}
                />
                 {Errors.ComfirmPassword && <span className='error'>{Errors.ComfirmPassword}</span>}
            </div>
            <button type='submit'> Submit</button>
        </form>
      
    
  )
}

export default FormValidation
