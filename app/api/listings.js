import client from "./client";

const endpoint = "/listings";

export const getListings = () => client.get(endpoint);

export default {
  getListings,
};
