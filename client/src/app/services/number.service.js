import httpService from "./http.service";

const numberEndpoint = "api/number/";

const numberService = {
  get: async () => {
    const { data } = await httpService.get(numberEndpoint);
    return data;
  },
  create: async (payload) => {
    const data = await httpService.post(numberEndpoint, payload);
    return data;
  },
  remove: async (numberId) => {
    const { data } = await httpService.delete(numberEndpoint + numberId);
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.put(
      numberEndpoint + payload.id,
      payload
    );
    return data;
  },
};
export default numberService;
