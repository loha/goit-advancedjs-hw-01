const load = key => {
  try {
    const rawData = localStorage.getItem(key);

    return JSON.parse(rawData);
  } catch (error) {
    console.log(error);
  }
};

const save = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

const remove = key => localStorage.removeItem(key);

export default {
  load,
  save,
  remove,
};
