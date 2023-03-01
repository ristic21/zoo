import React, { Component } from 'react';



export class AnimalList extends Component {
  render() {
    const nizZivotinja = [
        { id: 1, vrsta: 'zec', ime: "nekiZec", datumRodjenja:new Date("2019/04/01").toISOString() },
        { id: 2, vrsta: 'medved', ime: "nekiMedved", datumRodjenja:new Date("2020/02/21").toISOString() },
        { id: 3, vrsta: 'lav', ime: "nekiLav", datumRodjenja:new Date("2020/04/21").toISOString() },
         { id: 4, vrsta: 'lav', ime: "nekiDrugiLav", datumRodjenja:new Date("2021/06/21").toISOString() },
     { id: 5, vrsta: 'lav', ime: "nekiTreciLav", datumRodjenja:new Date("2021/04/21").toISOString() },
    ]
    return(

       
    <div>
        <h1>Zivotinje:</h1>
        <table className='zivotinjeTable'>
        <tbody>
{nizZivotinja.map((zivotinja) => (
          <tr className='zivotinjeTable' key={zivotinja.id}> <span>VRSTA: {zivotinja.vrsta} </span> <span>IME: {zivotinja.ime} </span> <span>DATUM RODJENJA: {zivotinja.datumRodjenja} </span> </tr>
        ))} 
</tbody>
        </table>
    </div>
    )
}
}

export default AnimalList;