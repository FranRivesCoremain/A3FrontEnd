// GENERAL
import { useState, useEffect } from 'react'

// COMPONENTS
import MainTable from './components/MainTable'
import GeneralContext from './contexts/GeneralContext'

// FUNCTIONS
import getTableData from './functions/getTableData'

function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setTableData(await getTableData());
    }
    fetchData();
  }, []);

  return (
    <>
      <GeneralContext.Provider value={{ tableData: { tableData, setTableData } }}>
        <div className="App">
          {tableData.length > 0 &&
            <MainTable />
          }
        </div>
      </GeneralContext.Provider>
    </>
  );
}

export default App
