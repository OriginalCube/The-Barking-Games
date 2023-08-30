import React, { useState } from "react";
import api from "../api/Pet";
// pet name
// pet birthdate
// breed
//
const AddPet = () => {
  const [pet, setPet] = useState({
    name: "",
    birthdate: new Date(),
    breed: "",
  });

  const handleAddPet = async (e: any) => {
    e.preventDefault();
    const addPet = await api.handleAddPet(pet);
    console.log(addPet);
  };

  return (
    <form
      onSubmit={handleAddPet}
      className="h-auto w-full flex items-center justify-center gap-8"
    >
      <div className="h-36 w-36 border-2"></div>
      <div className="h-auto w-2/3 flex flex-col items-center justify-center gap-4">
        <fieldset className="w-4/5 h-auto">
          <legend className="text-md font-medium text-pallete-header">
            Pet's Name
          </legend>
          <input
            type="text"
            required
            title="username"
            onChange={(e) => setPet({ ...pet, name: e.target.value })}
            className="outline-none border-2 text-pallete-header border-pallete-primary p-2 
                text-md rounded-md w-full focus:border-pallete-imp"
          />
        </fieldset>
        <fieldset className="w-4/5 h-auto">
          <legend className="text-md font-medium text-pallete-header">
            Pet's Birthdate
          </legend>
          <input
            type="date"
            required
            title="birthdate"
            onChange={(e) =>
              setPet({ ...pet, birthdate: new Date(e.target.value) })
            }
            className="outline-none border-2 text-pallete-header border-pallete-primary p-2 
                text-md rounded-md w-full focus:border-pallete-imp"
          />
        </fieldset>
        <fieldset className="w-4/5 h-auto">
          <legend className="text-md font-medium text-pallete-header">
            Pet's Breed
          </legend>
          <input
            type="text"
            required
            title="breed"
            onChange={(e) => setPet({ ...pet, breed: e.target.value })}
            className="outline-none border-2 text-pallete-header border-pallete-primary p-2 
                text-md rounded-md w-full focus:border-pallete-imp"
          />
        </fieldset>
        <button
          className="border-2 font-semibold bg-pallete-background 
        text-pallete-himp
        rounded-md hover:text-pallete-background hover:bg-pallete-himp p-2 px-4"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddPet;
