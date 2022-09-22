import Form from "react-bootstrap/Form";

export const CheckRadioBtn = () => {

  

  return (
    <Form>
      <h3>Filtrar instructores por:</h3>
      <div className="mb-3">
        <Form.Check
          inline
          label="Boxeo"
          name="group1"
          type="radio"
          id="inline-radio-1"
        />
        <Form.Check
          inline
          label="KickBoxing"
          name="group1"
          type="radio"
          id="inline-radio-2"
        />
        <Form.Check
          inline
          label="Todos"
          name="group1"
          type="radio"
          id="inline-radio-3"
        />
      </div>
    </Form>
  );
};
