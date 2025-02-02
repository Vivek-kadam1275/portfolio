import React from "react"
import { PiCertificateFill } from "react-icons/pi";

const CertificateCard = ({certificate}) => {
    console.log(certificate.name);

  return (
    <div>
      <div className="flex flex-col items-center gap-3">
        <img src={certificate.image} alt={certificate.name} loading="lazy" className="w-[60%] h-[60%] certificate-res"/>
        <p className="flex justify-center items-center gap-2 text-white "><PiCertificateFill />
        {certificate.name}</p>
      </div>
    </div>
  )
};

export default CertificateCard;
