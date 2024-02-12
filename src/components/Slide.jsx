import { useNavigate } from 'react-router-dom';

export const Slide = (props) => {
    const navigate = useNavigate(); 
    
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            
            localStorage.setItem('uploadedPhoto', URL.createObjectURL(file));
        
            navigate('/forum'); 
        }
    };

    return (
        <>
            <p className="cardHeading">Today I should...</p>
            <p className="ecoIdeas">{props.idea ?? ""}</p>
            <p className='ecoInfo'>{props.info ?? ""}</p>
            <label htmlFor="files" className="btn">Take a photo</label>
            <input id="files" style={{ visibility: "hidden" }} type="file" onChange={handleFileChange} />
        </>
    )
}