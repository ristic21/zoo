import { useState } from "react";

const AnimalList = () => {
  const [nizZivotinja, setNiz] = useState([
    {
      id: 1,
      vrsta: "Zec",
      ime: "Miki",
      datumRodjenja: new Date("2019/04/01").toISOString(),
    },
    {
      id: 2,
      vrsta: "Medved",
      ime: "Mrki",
      datumRodjenja: new Date("2020/02/21").toISOString(),
    },
    {
      id: 3,
      vrsta: "Lav",
      ime: "Misa",
      datumRodjenja: new Date("2020/04/21").toISOString(),
    },
    {
      id: 4,
      vrsta: "Lav",
      ime: "Milka",
      datumRodjenja: new Date("2021/06/21").toISOString(),
    },
    {
      id: 5,
      vrsta: "Lav",
      ime: "Dzeki"
    },
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


  const [vrsta, setAnimal] = useState('');
  const [ime, setName] = useState('');
  const [datumRodjenja, setBirth] = useState("2014-07-02");
  const [type, setType] = useState('sisar')


  const handleSubmit = (e) => {
    e.preventDefault();
    let animals = nizZivotinja.slice()
    animals.push({
      id: nizZivotinja.length + 1,
      vrsta: vrsta,
      ime: ime,
      datumRodjenja: datumRodjenja,
      type: type,
    });
    setNiz(animals)

  };

  const showUl = () => {
    const ul = <ul>
      {nizZivotinja.map((zivotinja) => (zivotinja.type == "ptica" &&
        <li key={zivotinja.id}>{zivotinja.vrsta} {zivotinja.ime}</li>
      ))}

    </ul>
    // alert(ul)
  }



  return (
    <div>
      <h1>Zivotinje:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Vrsta:
          <input
            type='text'
            value={vrsta}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type='text'
            value={ime}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            placeholder='Age'
            type='date'
            value={datumRodjenja}
            onChange={(e) => {
              setBirth(e.target.value);
            }}
          />
        </label>
        <br />
        <select value={type} onChange={(e) => {
          setType(e.target.value);
        }}>
          <option value="sisar">Sisar</option>
          <option value="riba">Riba</option>
          <option value="ptica">Ptica</option>
        </select>
        <br />
        <button type="submit">Submit</button>

      </form>
      <table className="zivotinjeTable App">
        <tbody>
          {nizZivotinja.map((zivotinja, index) => (
            <tr className="zivotinjeTable" key={index}>
              <td className="zivotinjeTable">VRSTA: {zivotinja.vrsta}</td>
              <td className="zivotinjeTable">IME: {zivotinja.ime}</td>
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
      <section>
        <h4>Sisari:</h4>
        <table>
          <tbody>
            {nizZivotinja.map((zivotinja) => (zivotinja.type == "sisar" &&
              <tr className="App" key={zivotinja.id}><td className="zivotinjeTable">Vrsta: {zivotinja.vrsta}</td><td className="zivotinjeTable">Ime: {zivotinja.ime}</td><td className="zivotinjeTable">Datum rodjenja: {zivotinja.datumRodjenja}</td></tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => alert(
          <ul>
            {nizZivotinja.map((zivotinja) => (zivotinja.type == "sisar" &&
              <li key={zivotinja.id}>{zivotinja.vrsta} {zivotinja.ime}</li>
            ))}
          </ul>

        )}>Prikazi sisare</button>


      </section>

      <section>
        <h4>Ribe:</h4>
        <table>
          <tbody>
            {nizZivotinja.map((zivotinja) => (zivotinja.type == "riba" &&
              <tr className="App" key={zivotinja.id}><td className="zivotinjeTable">Vrsta: {zivotinja.vrsta}</td><td className="zivotinjeTable">Ime: {zivotinja.ime}</td><td className="zivotinjeTable">Datum rodjenja: {zivotinja.datumRodjenja}</td></tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => alert(
          <ul>
            {nizZivotinja.map((zivotinja) => (zivotinja.type == "riba" &&
              <li key={zivotinja.id}>{zivotinja.vrsta} {zivotinja.ime}</li>
            ))}
          </ul>
        )}>Prikazi ribe</button>


      </section>

      <section>
        <h4>Ptice:</h4>
        <table>
          <tbody>
            {nizZivotinja.map((zivotinja) => (zivotinja.type == "ptica" &&
              <tr className="App zivotinjeTable" key={zivotinja.id}><td className="zivotinjeTable">Vrsta: {zivotinja.vrsta}</td><td className="zivotinjeTable">Ime: {zivotinja.ime}</td><td className="zivotinjeTable">Datum rodjenja: {zivotinja.datumRodjenja}</td></tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => alert(
          <ul>
            {nizZivotinja.map((zivotinja) => (zivotinja.type == "ptica" &&
              <li key={zivotinja.id}>{zivotinja.vrsta} {zivotinja.ime}</li>
            ))}
          </ul>
        )}>Prikazi ptice</button>
      </section>

    </div >
  );
};

export default AnimalList;

// const index = array.indexOf(5);
// if (index > -1) { // only splice array when item is found
//   array.splice(index, 1); // 2nd parameter means remove one item only
// }
