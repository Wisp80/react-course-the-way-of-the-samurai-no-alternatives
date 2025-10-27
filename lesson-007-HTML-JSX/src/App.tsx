function App() {
  return (
      <div>
          <input id="title"
                 maxLength={15}
                 placeholder="search"
                 disabled={false}
                 className={"title"}
                 // style={ {
                 //     color: "red",
                 //     border: "1px solid green",
                 //     backgroundColor: "yellow",
                 // } }
          />
      </div>
  )
}

export default App;
