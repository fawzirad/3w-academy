import React from "react";
import { Container, Err, ErrorBg } from "./ErrorElements";

const Error = () => {
  return (
    <>
      <Container>
          <Err>
            <ErrorBg />
          </Err>
      </Container>
    </>
  );
};

export default Error;
