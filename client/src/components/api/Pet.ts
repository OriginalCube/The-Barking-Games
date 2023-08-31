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

const handleRetrievePet = async () => {
  const retrievePet = await axios.get(`${api_url}/retrieve`, {
    headers: { authorization: `Bearer ${token}` },
  });
  return retrievePet;
};

const Pet = {
  handleAddPet,
  handleRetrievePet,
};

export default Pet;
