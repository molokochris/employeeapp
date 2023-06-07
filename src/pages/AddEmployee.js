import { useRef, useState } from "react";

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
            console.log(selectedFile)

            const fileReader = new FileReader();

            fileReader.onload = () => {
                const dataURL = fileReader.result;
                setImageSrc(dataURL);
            };

            fileReader.readAsDataURL(selectedFile);

            console.log(imageSrc)
        };
    

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
                <input
                    type="text"
                    placeholder="First Names"
                />
                <input
                    type="text"
                    placeholder="Surname"
                />
                <input
                    type="email"
                    placeholder="Email"
                />
                <input type="number"
                    placeholder="Contact Number"
                />
                <input
                    type="number"
                    placeholder="ID Number"
                />
                <input
                    type="text"
                    placeholder="Employee Position"
                />
            </div>
            <button>Add</button>
        </div>
    );
}