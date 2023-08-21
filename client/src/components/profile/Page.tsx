import { useState } from "react";
import { useSelector } from "react-redux";
import UserDetails from "./UserDetails";
import AddPet from "./AddPet";

const Page = () => {
  const { value } = useSelector((state: any) => state.user);
  const [addPet, setAddPet] = useState(false);
  return (
    <div className="w-11/12 h-auto flex flex-col gap-4">
      <UserDetails username={value.username} email={value.email} />

      {addPet ? <AddPet /> : null}

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
