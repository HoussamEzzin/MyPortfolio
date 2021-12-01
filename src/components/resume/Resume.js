
import React from 'react';
import './Resume.css';


class Resume extends React.Component{

    downloadFile = () => {
        let pdfUrl = 'https://www.yumpu.com/fr/document/read/66019493/cv-final-ezzin';
        window.open(pdfUrl, '_blank')
    }

    render(){
        return(
            <div>
                <button className="download-button" onClick={this.downloadFile}>
                    Visit Resume
                </button>
            </div>
        )
    }


    
}

export default Resume;