import React from "react";

function Details(props) {
  
  return (
    <div>
      {/* <h1>name:{props.name}</h1> */}
<h2> Person Details</h2>
      <table class="table table-bordered border-primary" style={{border:"2px soild black",marginBlock:"30px"}}>
        <tr style={{border:"2px soild black"}}>
        <th>id</th>

          <th>Name</th>
          <th>Email</th>
          <th>UserName</th>
          <th>companyName</th>
          <th>City</th>
        </tr>

        {props.display.map((val, ind) => (
          <tr key={val.id} style={{border:"2px soild black"}} >
          <td>{val.id}</td>

            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>{val.username}</td>
            <td> {val.company.name}</td>
            <td> {val.address.city}</td>

          </tr>
        ))}
      </table>
    </div>
  );
}

export default Details;
