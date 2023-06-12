import { useRef, useState } from "react";
import { Link } from "react-router-dom";
// import {useHistory} from 'react-router-dom';

export default function AddEmployee() {

    // function SelectedImage() {

        
    // }
    const fileInputRef = useRef(null);
    const [imageSrc, setImageSrc] = useState("./Prof-placeholder.png");

    const handleImageClick = () => {
            fileInputRef.current.click();
        };

    const handleFileChange = (event) => {
            const selectedFile = event.target.files[0];
            // console.log(selectedFile)

            const fileReader = new FileReader();

            fileReader.onload = () => {
                const dataURL = fileReader.result;
                setImageSrc(dataURL);
            };

            fileReader.readAsDataURL(selectedFile);

            console.log(imageSrc)
        };
    
        //Input field
        let employeeData = [];
        const [firstName, setFirstName] = useState('');
        const [surname, setSurname] = useState('');
        const [email, setEmail] = useState('');
        const [contactNumber, setContactNumber] = useState('');
        const [idNumber, setIdNumber] = useState('');
        const [employeePosition, setEmployeePosition] = useState('');
        const [submitClicked, setSubmitClick] = useState(false);

        const handleFirstNameChange = (e) => {
            setFirstName(e.target.value);
        };

        const handleSurnameChange = (e) => {
            setSurname(e.target.value);
        };

        const handleEmailChange = (e) => {
            setEmail(e.target.value);
        };

        const handleContactNumberChange = (e) => {
            setContactNumber(e.target.value);
        };

        const handleIdNumberChange = (e) => {
            setIdNumber(e.target.value);
        };

        const handleEmployeePositionChange = (e) => {
            setEmployeePosition(e.target.value);
        };
        const handleSubmit = (e) => {
            e.preventDefault();

            employeeData.push({
                "firstName" : firstName,
                "Surname": surname,
                "contacts": contactNumber,
                "email": email,
                "idNumber": idNumber,
                "position": employeePosition,
                "imageSrc": imageSrc
            })
            console.log(employeeData);

            setFirstName('');
            setSurname('');
            setContactNumber('');
            setEmail('');
            setIdNumber('');
            setEmployeePosition('');
            setImageSrc("./Prof-placeholder.png")

            setSubmitClick(!submitClicked);

            // history.push('/view-employees');
        }

    return (
        <div className="add-employee">
            <div className="profile-pic">
                <img src={imageSrc} alt="" onClick={handleImageClick}/>
                <input
                    type="file"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
            </div>
            
            <div className="input-form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="First Names"
                        value={firstName}
                        onChange={handleFirstNameChange} 
                    />
                    <input
                        type="text"
                        placeholder="Surname"
                        value={surname}
                        onChange={handleSurnameChange} 
                    />
                    <input
                        type="number"
                        placeholder="Contact numbers"
                        value={contactNumber}
                        onChange={handleContactNumberChange} 
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={handleEmailChange} 
                    />
                    <input
                        type="number"
                        placeholder="ID Number"
                        value={idNumber}
                        onChange={handleIdNumberChange} 
                    />
                    <input
                        type="text"
                        placeholder="Employee Position"
                        value={employeePosition}
                        onChange={handleEmployeePositionChange} 
                    />
                    <br />
                    <button type="submit">add</button>
                    { submitClicked && (<>
                    <br />
                    <Link to="/view">View Employees</Link>
                    </>)}
                    
                </form>
            </div>
        </div>
    );
}