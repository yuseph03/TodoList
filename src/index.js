import _ from 'lodash';
  
const TodoItemFactory = (title, desc) => {
  const getTitle = () => {return title};
  const getDesc = () => {return desc};
  const getCompl= () => {return false};
  return {getTitle, getDesc, getCompl};
};

const SetComplete = () => {
  return true;
} 

const meditate = TodoItemFactory('meditate', '15 mins of silence', '3');
