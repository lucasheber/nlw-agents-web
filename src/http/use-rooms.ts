import { useQuery } from "@tanstack/react-query";
import type { GetRoomsResponse } from "./types/get-rooms-response";

export function useRooms() {
    return useQuery<GetRoomsResponse>({
        queryKey: ["get-rooms"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3000/rooms");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const result: GetRoomsResponse = await response.json();
            return result;
        },
    });
}