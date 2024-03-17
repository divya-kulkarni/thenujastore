export const InvalidProduct = () => {
  return (
    <div
      style={{
        backgroundColor: "#6a9b78",
        width: "100vw",
        height: "100vh",
        color: "white",
      }}
    >
      <div
        className="content"
        style={{ margin: "auto", textAlign: "center", paddingTop: "10%"}}
      >
        <h1>Page not found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <a href="/products" style={{ color: "white", borderColor: "white" }}>
          <h5 style={{ paddingBottom: "1%" }}>CONTINUE SHOPPING→</h5>
        </a>
      </div>
    </div>
  );
};
