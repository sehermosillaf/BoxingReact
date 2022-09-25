import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { CardBtn } from "../componentes/cards/card-btn-comp";
export const Planes = () => {
  return (
    <Row xs={1} md={3} className="g-4 mt-5 mx-auto" style={{ width: "80%" }}>
      <Col>
        <CardBtn
          titulo="Plan básico"
          desc="Válido por 3 meses"
          img={null}
          btnVariant={"primary"}
          BtnText={"Ver plan"}
        />
      </Col>
      <Col>
        <CardBtn
          titulo="Plan intermedio"
          desc="Válido por 6 meses"
          img={null}
          btnVariant={"primary"}
          BtnText={"Ver plan"}
        />
      </Col>

      <CardBtn
        titulo="Plan full"
        desc="Válido por 12 meses"
        img={null}
        btnVariant={"primary"}
        BtnText={"Ver plan"}
      />
    </Row>
  );
};
