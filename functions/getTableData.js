import axios from 'axios';

async function getTableData() {
  let data = (await axios.get(`http://localhost:8000/data1`)).data;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < Object.keys(data[i]).length; j++) {
      let value = data[i][Object.keys(data[i])[j]];
      let object = { value: value, isEditable: Object.keys(data[i])[j] === "campo1" ? false : true, isEdited: false };
      data[i][Object.keys(data[i])[j]] = object;
    }
  }

  return data;
}

export default getTableData;