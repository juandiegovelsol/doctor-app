import whatsapp_logo from "../../assets/whatsapp-icon.svg";
import "./whatsapp.scss";

const Whatsapp = () => {
  return (
    <a
      className="whatsapp"
      href="https://api.whatsapp.com/send?phone=%2B573155807405&text=Hola%2C+quisiera+consultar+acerca+de+disponibilidad+para+una+cita"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="whatsapp__icon"
        src={whatsapp_logo}
        alt="whatsapp"
        loading="lazy"
      />
    </a>
  );
};

export default Whatsapp;
