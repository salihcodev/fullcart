const delayer = async (duration: number = 500): Promise<void> => {
  return await new Promise((res) => setTimeout(res, duration));
};

export default delayer;
