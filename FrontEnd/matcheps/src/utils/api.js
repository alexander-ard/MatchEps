export default {
  async get(url) {
    const resp = await fetch(`${process.env.API_ROOT}${url}`);
    const data = await resp.json();
    return data;
  },
};
