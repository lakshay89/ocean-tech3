import React from "react";
import "./map.css";

export default function GoogleMap() {
    return (
        <div className="MapContainer">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5543032975115!2d77.1952743!3d28.5230543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce15186b5d77b%3A0x3556b7032e067cd8!2sOcean%20Tech%20Zone!5e0!3m2!1sen!2sin!4v1755343822089!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </div>
    );
}



