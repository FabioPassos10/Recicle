import React from "react";
import { Table, Row, Container, Col } from "reactstrap";

function Ongs() {
  return (
    <Table bordered borderless striped>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Endereço</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>CENTRO DE APRENDIZAGEM E DESENVOLVIMENTO SOCIAL SUSTENTÁVEL</td>
          <td>Rua Nicolau Falseti - 115 – Centro - Mogi Guaçu</td>
          <td>19-82818610</td>
        </tr>
        <tr>
          <td>ASSOCIAÇÃO DO MEIO AMBIENTE, ABELHAS E POLINIZADORES</td>
          <td>AV MOGI GUAÇU - 3000 - PRQ ESTADO II – Mogi Mirim</td>
          <td>19-992043934</td>
        </tr>
        <tr>
          <td>CRAS - Centro de Referência de Assistência Social</td>
          <td>PRAÇA AUGUSTO RODRIGUES DE MELLO,S/Nº - YPÊ I </td>
          <td>(19) 3831-3505</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Ongs;
