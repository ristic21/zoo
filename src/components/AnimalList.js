import { useState } from "react";

const AnimalList = () => {
  const [nizZivotinja, setNiz] = useState([
    {
      id: 1,
      vrsta: "zec",
      ime: "nekiZec",
      datumRodjenja: new Date("2019/04/01").toISOString(),
    },
    {
      id: 2,
      vrsta: "medved",
      ime: "nekiMedved",
      datumRodjenja: new Date("2020/02/21").toISOString(),
    },
    {
      id: 3,
      vrsta: "lav",
      ime: "nekiLav",
      datumRodjenja: new Date("2020/04/21").toISOString(),
    },
    {
      id: 4,
      vrsta: "lav",
      ime: "nekiDrugiLav",
      datumRodjenja: new Date("2021/06/21").toISOString(),
    },
    { id: 5, vrsta: "lav", ime: "nekiTreciLav" },
  ]);

  const remove = (id) => {
    const newAnimals = nizZivotinja.filter((animal) => animal.id !== id);
    setNiz(newAnimals);
  };

  const moveAnimals = (animalProp) => {
    const indexOfAnimalObj = nizZivotinja.indexOf(animalProp);

    const newAnimals = [
      nizZivotinja[indexOfAnimalObj],
      ...nizZivotinja.filter((animal) => animal.id !== animalProp.id),
    ];

    setNiz(newAnimals);
  };

  return (
    <div>
      <h1>Zivotinje:</h1>
      <table className="zivotinjeTable">
        <tbody>
          {nizZivotinja.map((zivotinja, index) => (
            <tr className="zivotinjeTable" key={index}>
              <td className="zivotinjeTable">VRSTA:{zivotinja.vrsta}</td>
              <td className="zivotinjeTable">IME:{zivotinja.ime}</td>
              <td className="zivotinjeTable">
                DATUM RODJENJA:
                {zivotinja.datumRodjenja
                  ? zivotinja.datumRodjenja
                  : "Datum rodjenja nepoznat"}
              </td>
              <td><button onClick={() => remove(zivotinja.id)}>
                Remove
              </button></td>
              <td><button onClick={() => moveAnimals(zivotinja)}>
                Move to top
              </button></td>
              
            </tr>
          ))}
       </tbody>
      </table>
    </div>
  );
};

export default AnimalList;

// const index = array.indexOf(5);
// if (index > -1) { // only splice array when item is found
//   array.splice(index, 1); // 2nd parameter means remove one item only
// }
