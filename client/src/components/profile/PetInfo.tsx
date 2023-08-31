import React from "react";

interface PetProps {
  name: string;
  birthdate: string;
  breed: string;
}

const PetInfo = ({ name, birthdate, breed }: PetProps) => {
  return (
    <div className="w-full h-auto flex items-center justify-start gap-4">
      <div className="h-36 w-1/6 flex items-center justify-center">
        <div className="h-full w-36 border-2 border-pallete-header"></div>
      </div>
      <div className="h-auto w-2/3 flex flex-col items-start justify-center gap-2">
        <p className="text-2xl text-pallete-header">{name}</p>
        <p className="text-md text-pallete-imp">
          {new Date(birthdate).toLocaleDateString()}
        </p>
        <p className="text-md text-pallete-imp">{breed}</p>
      </div>
    </div>
  );
};

export default PetInfo;
