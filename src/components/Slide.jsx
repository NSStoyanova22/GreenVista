import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export const Slide = (props) => {
    const navigate = useNavigate(); 
    const [msgUserLogin, setmsgUserLogin] = useState('');
   
    const  getBase64 = file => {
        return new Promise(resolve => {
          let fileInfo;
          let baseURL = "";
          let reader = new FileReader();
    
          reader.readAsDataURL(file);
  
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
            localStorage.setItem('challengeName', props.idea);
            navigate('/forum'); 
          })
          .catch(err => {
            console.log(err);
          });
        }
    };

    const uploadFile = () => {
      if(localStorage.getItem('userData')) {
        document.getElementById('files').click();
      }
      else{
        setmsgUserLogin('Please Log in first.')
      }
    }

    return (
        <>
            <p className="cardHeading">Today I should...</p>
            <p className="ecoIdeas">{props.idea ?? ""}</p>
            <p className='ecoInfo'>{props.info ?? ""}</p>
            <span className="btn" onClick={uploadFile}>Take a photo</span>
            <input id="files" style={{ visibility: "hidden" }} type="file" onChange={handleFileChange} />
            {msgUserLogin !== '' ? (
              <div><p>{msgUserLogin}</p></div>
            ): null}
        </>
    )
}