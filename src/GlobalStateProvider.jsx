import React, { Suspense } from "react";

const RemoteGlobalStateProvider = ({ children }) => {
  const GlobalStateProvider = React.lazy(() =>
    import("host_app/GlobalStateProvider")
  );

  return (
    <Suspense fallback={"loading ...."}>
      <GlobalStateProvider>{children}</GlobalStateProvider>
    </Suspense>
  );
};

export default RemoteGlobalStateProvider;
