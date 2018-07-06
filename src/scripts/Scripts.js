
const getRandomId = () => Math.floor(Math.random() * Math.floor(1000));

const checkLabelExists = (labelList, labelName) => {
  if(labelList.length > 0) {
    return labelList.findIndex(label => label.title === labelName);
  }
  return -1;
};
export {
  getRandomId,
  checkLabelExists,
}
