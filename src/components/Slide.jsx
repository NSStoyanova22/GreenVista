import { useNavigate } from 'react-router-dom';

export const Slide = (props) => {
    const navigate = useNavigate(); 
   
    const  getBase64 = file => {
        return new Promise(resolve => {
          let fileInfo;
          let baseURL = "";
          // Make new FileReader
          let reader = new FileReader();
    
          // Convert the file to base64 text
          reader.readAsDataURL(file);
    
          // on reader load somthing...
          reader.onload = () => {
            baseURL = reader.result;
            //console.log(baseURL);
            resolve(baseURL);
          };
          console.log(fileInfo);
        });
      };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            
            localStorage.setItem('uploadedPhoto', URL.createObjectURL(file));
            
        getBase64(file)
          .then(result => {
            localStorage.setItem('uploadedBase64Photo', result);
          })
          .catch(err => {
            console.log(err);
          });
            
            localStorage.setItem('challengeName', props.idea);
            navigate('/forum'); 
        }
    };

    const uploadFile = () => {
      // check for logged user in
      if(localStorage.getItem('userData')) {
        document.getElementById('files').click();
      }
    }

    return (
        <>
            <p className="cardHeading">Today I should...</p>
            <p className="ecoIdeas">{props.idea ?? ""}</p>
            <p className='ecoInfo'>{props.info ?? ""}</p>
            <span className="btn" onClick={uploadFile}>Take a photo</span>
            <input id="files" style={{ visibility: "hidden" }} type="file" onChange={handleFileChange} />
        </>
    )
}