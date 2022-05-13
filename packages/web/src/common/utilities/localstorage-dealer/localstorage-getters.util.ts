export const localStorageObjGetter = (dataKey: string) => {
  try {
    const data = localStorage.getItem(dataKey);

    return data !== null ? JSON.parse(data) : null;

    //
  } catch (err) {
    console.log(err);
  }
};

export const localStorageStringGetter = (dataKey: string) => {
  try {
    return localStorage.getItem(dataKey);

    //
  } catch (err) {
    console.log(err);
  }
};
