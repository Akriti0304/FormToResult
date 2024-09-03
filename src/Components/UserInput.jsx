import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function UserInput() {

    let [userInput, setUserInput] = useState({
        name: "",
        email: "",
        dob: "",
        countryCode: " ",
        phoneNumber: "",
    });

    const navigate = useNavigate();

    function handleChange(e) {
        setUserInput((prevUserInput) => {
            return ({ ...prevUserInput, [e.target.name]: e.target.value });
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        navigate("/profile-output", { state: { userData: userInput } });
    }

    const minPhoneNumber = userInput.countryCode === "+91" ? 1000000000 :
        userInput.countryCode === "+1" ? 1000000000 :
            userInput.countryCode === "+44" ? 1000000 :
                userInput.countryCode === "+49" ? 1000000 :
                    userInput.countryCode === "+61" ? 1000000 :
                        userInput.countryCode === "+33" ? 1000000 :
                            userInput.countryCode === "+86" ? 10000000 :
                                userInput.countryCode === "+81" ? 10000000 :
                                    userInput.countryCode === "+55" ? 10000000 :
                                        1000000;

    const maxPhoneNumber = userInput.countryCode === "+91" ? 9999999999 :
        userInput.countryCode === "+1" ? 9999999999 :
            userInput.countryCode === "+44" ? 999999999 :
                userInput.countryCode === "+49" ? 999999999 :
                    userInput.countryCode === "+61" ? 999999999 :
                        userInput.countryCode === "+33" ? 999999999 :
                            userInput.countryCode === "+86" ? 9999999999 :
                                userInput.countryCode === "+81" ? 9999999999 :
                                    userInput.countryCode === "+55" ? 9999999999 :
                                        9999999999;


    return (
        <div className="d-flex gap-5 offset-1">
            <h1 className="align-self-center" 
            style={{fontSize:"3rem",color:"maroon",opacity:"0.3"}}>
                <i className="fa-solid fa-address-card" ></i>&nbsp;Enter Your Details</h1>

            <form onSubmit={handleSubmit} className="w-50 d-flex flex-column gap-4 mt-4">

                <section>
                <label htmlFor="name">Name : </label>
                <br />
                <TextField className="w-100" type="text" value={userInput.name}
                    id="name" label="Enter you name"
                    onChange={handleChange} name="name" required
                    variant="filled" />
                </section>

                <section>
                <label htmlFor="email">Email : </label>
                <br />
                <TextField className="w-100" type="email" value={userInput.email}
                    label="Enter your Email" id="email"
                    onChange={handleChange} name="email" required
                    variant="filled" />
                </section>

                <section>
                <label htmlFor="dob">Date of birth : </label>
                <br />
                <TextField className="w-100" type="date" id="dob" value={userInput.dob}
                    onChange={handleChange}
                    name="dob" required
                    variant="filled" />
                </section>

                <section>
                    <label htmlFor="countryCode">Country Code : </label>
                    <br />
                <Select
                // style={{width:"30rem"}}
                    className="w-100"
                    labelId="demo-simple-select-standard-label"
                    id="countryCode" name="countryCode" value={userInput.countryCode}
                    onChange={handleChange} required>

                    <MenuItem value=" " disabled>Select option</MenuItem>
                    <MenuItem value="+91">+91 India</MenuItem>
                    <MenuItem value="+1">+1 Canada / United States</MenuItem>
                    <MenuItem value="+44">+44 United Kingdom</MenuItem>
                    <MenuItem value="+49">+49 Germany</MenuItem>
                    <MenuItem value="+61">+61 Autsralia</MenuItem>
                    <MenuItem value="+33">+33 France</MenuItem>
                    <MenuItem value="+86">+86 China</MenuItem>
                    <MenuItem value="+81">+81 Japan</MenuItem>
                    <MenuItem value="+55">+55 Brazil</MenuItem>
                </Select>
                </section>

                <section>
                    <label htmlFor="phoneNumber">Phone number :</label>
                    <br />
                    <TextField className="w-100" type="number" name="phoneNumber" id="phoneNumber"
                    value={userInput.phoneNumber} required onChange={handleChange}
                    inputProps={{ max: maxPhoneNumber, min: minPhoneNumber }} label="Enter phone number"
                    variant="filled" />
                </section>

                <Button type="submit" variant="outlined">Submit</Button>

            </form>
        </div>
    );
}