import React from "react";
import { Table, Row, Container, Col } from "reactstrap";

function Verde() {
  return (
    <Table>
      <thead>
        <tr>
          <th>Material</th>
          <th>Tempo de Decomposição</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Papel</td>
          <td>3 a 6 meses</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Verde;
