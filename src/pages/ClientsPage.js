import React from "react";
import RouterHeader from "../components/RouterHeader";
import Clients from "../components/Clients";

function ClientsPage() {
  const routeName = "Clients";
  return (
    <>
      <RouterHeader path={routeName} />
      <Clients />
    </>
  );
}

export default ClientsPage;
