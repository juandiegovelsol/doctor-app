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
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl>
      <h2>Solicita tu cita</h2>
      <FormLabel id="name">Nombre completo del paciente</FormLabel>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label="Nombre"
            id="standard-size-normal"
            defaultValue="Pepito"
            variant="standard"
          />
          <TextField
            label="Apellido"
            id="standard-size-normal"
            defaultValue="Perez"
            variant="standard"
          />
        </div>
      </Box>
      <FormLabel id="name">Edad del paciente</FormLabel>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Edad</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={0}>Menor un año</MenuItem>
            <MenuItem value={1}>1 año</MenuItem>
            <MenuItem value={2}>2 años</MenuItem>
            <MenuItem value={3}>3 años</MenuItem>
            <MenuItem value={4}>4 años</MenuItem>
            <MenuItem value={5}>5 años</MenuItem>
            <MenuItem value={6}>6 años</MenuItem>
            <MenuItem value={7}>7 años</MenuItem>
            <MenuItem value={8}>8 años</MenuItem>
            <MenuItem value={9}>9 años</MenuItem>
            <MenuItem value={10}>10 años</MenuItem>
            <MenuItem value={11}>Mayor de 10 años</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <FormLabel id="name">Nombre completo del acudiente</FormLabel>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label="Nombre"
            id="standard-size-normal"
            defaultValue="Pepito"
            variant="standard"
          />
          <TextField
            label="Apellido"
            id="standard-size-normal"
            defaultValue="Perez"
            variant="standard"
          />
        </div>
      </Box>
      <FormLabel id="demo-row-radio-buttons-group-label">Género</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
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
    </FormControl>
  );
};

export default Appointment;
