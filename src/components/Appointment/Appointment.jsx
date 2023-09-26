import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./appointment.scss";

const Appointment = () => {
  const [pname, setPname] = useState("");
  const [plast, setPlast] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [aname, setAname] = useState("");
  const [alast, setAlast] = useState("");
  const today = new Date();
  const [day, setDay] = useState(today.getDate());
  const [month, setMonth] = useState(today.getMonth());
  const [warning, setWarning] = useState("");
  const handleChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /* console.log(pname, plast, age, gender, aname, alast, day, month); */
    if (
      pname !== "Nombre" &&
      plast !== "Nombre" &&
      age !== "" &&
      gender !== "" &&
      aname !== "Nombre" &&
      alast !== "Nombre"
    ) {
      redirect(pname, plast, age, gender, aname, alast);
    } else {
      setWarning("visible");
      setTimeout(() => {
        setWarning("");
      }, 3000);
    }
  };

  const redirect = (pname, plast, age, gender, aname, alast) => {
    const message = `https://api.whatsapp.com/send?phone=%2B573155807405&text=Hola%2C+soy+${aname}+${alast}+y+quisiera+agendar+una+cita+para+${pname}+${plast}+%2C+${age}+%2C+${gender}+%2C+para+el+dia+${day}+/+${
      month + 1
    }`;
    location.replace(message);
  };

  return (
    <FormControl sx={{ backgroundColor: "white", padding: 7, borderRadius: 5 }}>
      <h2>Solicita tu Cita</h2>
      <FormLabel id="name">Nombre Completo del Paciente</FormLabel>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          marginBottom: 1,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Nombre"
          id="standard-size-normal"
          defaultValue="Nombre"
          variant="standard"
          onChange={(e) => handleChange(e, setPname)}
        />
        <TextField
          label="Apellido"
          id="standard-size-normal"
          defaultValue="Apellido"
          variant="standard"
          onChange={(e) => handleChange(e, setPlast)}
        />
      </Box>
      <FormLabel id="name" sx={{ marginBottom: 1 }}>
        Edad del Paciente
      </FormLabel>
      <Box sx={{ minWidth: 120, marginBottom: 1 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Edad</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={(e) => handleChange(e, setAge)}
          >
            <MenuItem value={"menor a un año"}>Menor a un año</MenuItem>
            <MenuItem value={"1 año"}>1 año</MenuItem>
            <MenuItem value={"2 años"}>2 años</MenuItem>
            <MenuItem value={"3 años"}>3 años</MenuItem>
            <MenuItem value={"4 años"}>4 años</MenuItem>
            <MenuItem value={"5 años"}>5 años</MenuItem>
            <MenuItem value={"6 años"}>6 años</MenuItem>
            <MenuItem value={"7 años"}>7 años</MenuItem>
            <MenuItem value={"8 años"}>8 años</MenuItem>
            <MenuItem value={"9 años"}>9 años</MenuItem>
            <MenuItem value={"10 años"}>10 años</MenuItem>
            <MenuItem value={"11 años"}>Mayor de 10 años</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Género del Paciente
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{ marginBottom: 1 }}
        onChange={(e) => handleChange(e, setGender)}
      >
        <FormControlLabel
          value="Femenino"
          control={<Radio />}
          label="Femenino"
        />
        <FormControlLabel
          value="Masculino"
          control={<Radio />}
          label="Masculino"
        />
        <FormControlLabel value="Otro" control={<Radio />} label="Otro" />
      </RadioGroup>
      <FormLabel id="name">Nombre Completo del Acudiente</FormLabel>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch", marginBottom: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Nombre"
          id="standard-size-normal"
          defaultValue="Nombre"
          variant="standard"
          onChange={(e) => handleChange(e, setAname)}
        />
        <TextField
          label="Apellido"
          id="standard-size-normal"
          defaultValue="Apellido"
          variant="standard"
          onChange={(e) => handleChange(e, setAlast)}
        />
      </Box>
      <FormLabel id="name">Fecha Deseada para la Cita</FormLabel>
      <Box
        sx={{
          minWidth: 120,
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          marginTop: 1,
        }}
      >
        <FormControl>
          <InputLabel id="demo-simple-select-label1">Dia</InputLabel>
          <Select
            labelId="demo-simple-select-label1"
            id="demo-simple-select"
            value={day}
            label="Dia"
            onChange={(e) => handleChange(e, setDay)}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={13}>13</MenuItem>
            <MenuItem value={14}>14</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={16}>16</MenuItem>
            <MenuItem value={17}>17</MenuItem>
            <MenuItem value={18}>18</MenuItem>
            <MenuItem value={19}>19</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={21}>21</MenuItem>
            <MenuItem value={22}>22</MenuItem>
            <MenuItem value={23}>23</MenuItem>
            <MenuItem value={24}>24</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={26}>26</MenuItem>
            <MenuItem value={27}>27</MenuItem>
            <MenuItem value={28}>28</MenuItem>
            <MenuItem value={29}>29</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={31}>31</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginLeft: 1 }}>
          <InputLabel id="demo-simple-select-label2">Mes</InputLabel>
          <Select
            labelId="demo-simple-select-label2"
            id="demo-simple-select"
            value={month}
            label="Month"
            onChange={(e) => handleChange(e, setMonth)}
          >
            <MenuItem value={0}>Enero</MenuItem>
            <MenuItem value={1}>Febrero</MenuItem>
            <MenuItem value={2}>Marzo</MenuItem>
            <MenuItem value={3}>Abril</MenuItem>
            <MenuItem value={4}>Mayo</MenuItem>
            <MenuItem value={5}>Junio</MenuItem>
            <MenuItem value={6}>Julio</MenuItem>
            <MenuItem value={7}>Agosto</MenuItem>
            <MenuItem value={8}>Septiembre</MenuItem>
            <MenuItem value={9}>Octubre</MenuItem>
            <MenuItem value={10}>Noviembre</MenuItem>
            <MenuItem value={11}>Diciembre</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <button className="appointment-button" onClick={handleSubmit}>
        Solicitar tu Cita
      </button>
      {warning && (
        <span className={`appointment-warning ${warning}`}>
          Por favor llene todos los campos!
        </span>
      )}
    </FormControl>
  );
};

export default Appointment;
