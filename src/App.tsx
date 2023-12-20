import * as stylex from "@stylexjs/stylex";

function App() {
  const styles = stylex.create({
    base: {
      color: "red",
      backgroundColor: "blue",
    },
  });
  return (
    <>
      <main>
        aaaa
        <div {...stylex.props(styles.base)}> bob </div>
      </main>
    </>
  );
}

export default App;
