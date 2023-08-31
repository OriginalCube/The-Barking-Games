import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserDetails from "./UserDetails";
import AddPet from "./AddPet";
import Schedule from "./Schedule";
import PetInfo from "./PetInfo";

interface PetProps {
  name: string;
  birthdate: string;
  breed: string;
}

const Page = () => {
  const { value } = useSelector((state: any) => state.user);

  const [addPet, setAddPet] = useState(false);

  return (
    <div className="w-11/12 h-auto flex flex-col gap-4">
      <UserDetails username={value.username} email={value.email} />
      <Schedule />

      {addPet ? <AddPet /> : null}

      <div className="w-full h-auto flex flex-col items-center justify-center gap-4">
        {value.pet
          ? value.pet.map((e: PetProps, index: number) => (
              <PetInfo
                key={index}
                name={e.name}
                breed={e.breed}
                birthdate={e.birthdate}
              />
            ))
          : null}
      </div>
      <div className="w-full h-20 flex items-center">
        <button
          onClick={() => setAddPet(!addPet)}
          title="Add Pet"
          className="p-2 px-6 border-2 border-pallete-imp rounded-xl flex gap-4 items-center
          text-pallete-imp hover:bg-pallete-imp hover:text-pallete-background font-normal"
        >
          <img src="/assets/icons/paws.png" className="h-8 w-auto" alt="" />
          Add pet
        </button>
      </div>
    </div>
  );
};

export default Page;
