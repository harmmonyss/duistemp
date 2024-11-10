function Component() {
  const [count, setCount] = React.useState(33);

  React.useEffect(() => {
    const ival = setInterval(() => setCount(c => c + 1), 50);
    return () => clearInterval(ival);
  }, []);

  const perc = count % 100;
  const rest = 100 - perc;

  return (
    <svg viewBox="0 0 200 200" style={{ width: "300px" }}>
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="red"
        strokeWidth="5"
        strokeDashoffset={-perc}
        strokeDasharray={`${perc} ${perc}`}
      />
    </svg>
  );
}

ReactDOM.render(<Component />, document.getElementById("root"));
