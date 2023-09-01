import {Billboard} from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  try {
    const response = await fetch(`${URL}/${id}`);

    return response.json();
  } catch (error) {
    console.log(error);
  }

};

export default getBillboard;