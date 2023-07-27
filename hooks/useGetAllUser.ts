import { useQuery } from "@apollo/client";
import { GET_ALL_USER } from "../graphql/queries/getAllUser";

export const useGetAllUser = () => {
    const { data, loading: loadingUser } = useQuery(GET_ALL_USER, {
        onError: (error) => console.log({ error }),
        // onCompleted: (successData) => {
        //     debugger
        //     console.log("successdata",successData);
        //     console.log("data",data);
        // },
        
    });
    return { getAllUser: data?.getAllUser, loadingUser };
};