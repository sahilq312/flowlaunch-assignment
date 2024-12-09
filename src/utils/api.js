import axios from "axios";

 const fetchTasks = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=20");
  const mappedData = data.map((item) => ({
        id: item.id, 
        title: item.title, 
        description: '', 
        status: item.completed ? 'Done' : 'To Do', 
  }));

  return mappedData;
};


export {fetchTasks};
