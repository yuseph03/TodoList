import _ from 'lodash';
  
const TodoItemFactory = (title, desc, priority) => {
  let complete = false;
  const getTitle = () => {return title};
  const getDesc = () => {return desc};
  const getPriority = () => {return priority};
  const getComplete = () => {return complete}
  const setComplete = () => complete = true;
  // const setPriority
  return { getTitle, getDesc, getPriority, setComplete, getComplete };
};

const meditate = TodoItemFactory('meditate', '15min Meditation today', '2');
