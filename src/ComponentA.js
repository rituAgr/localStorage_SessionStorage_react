
const ComponentA = () =>  {
    const setData = () =>{
        let obj = {'name': 'ComponentA', 'Occupation': 'ComponentA Engineer'};
        localStorage.setItem('data', JSON.stringify(obj));
    }
    const getData = () => {
        let item = localStorage.getItem('data');
        console.log('item : ', JSON.parse(item));
        console.log('item name : ', JSON.parse(item).name);
    }

  return (
    <div className="App">
      <button onClick={setData}>Set data</button>
      <button onClick={getData}>Get data</button>
    </div>
  );
}

export default ComponentA;
