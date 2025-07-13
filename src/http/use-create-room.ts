import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateRoomRequest } from "./types/create-room-request";
import type { Room } from "./types/room";

export function useCreateRoom() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: CreateRoomRequest) => {
            const response = await fetch("http://localhost:3000/rooms", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to create room");
            }

            const room: Room = await response.json();
            return room;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["get-rooms"],
            });
        }
    });
}