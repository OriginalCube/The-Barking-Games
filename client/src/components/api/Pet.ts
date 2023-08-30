import axios from "axios";

const api_url = "/api/v1/pet";
const token = localStorage.getItem("bg-token");

interface PetProps {
  name: string;
  birthdate: Date;
  breed: string;
}

const handleAddPet = async ({ name, birthdate, breed }: PetProps) => {
  const addPet = await axios.post(
    `${api_url}/add`,
    { name, birthdate, breed },
    {
      headers: { authorization: `Bearer ${token}` },
    },
  );
  return addPet;
};

const Pet = {
  handleAddPet,
};

export default Pet;
