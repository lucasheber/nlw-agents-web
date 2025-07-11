import { useQuery } from "@tanstack/react-query";
import { LucideHouse } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Room = {
  id: string;
  name: string;
  description: string;
};

type GetRoomsResponse = Room[];

export function CreateRoom() {
  const { data, error, isLoading } = useQuery({
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
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading rooms: {error.message}</p>}

      <div className="m-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((room: Room) => (
          <Card className="mb-4 flex flex-col" key={room.id}>
            <CardHeader>
              <CardTitle>{room.name}</CardTitle>
              <CardDescription>{room.description}</CardDescription>
              <CardAction>
                <Link to={`/room/${room.id}`}>
                  <Button
                    className="cursor-pointer"
                    size="icon"
                    variant="outline"
                  >
                    <LucideHouse className="h-4 w-4" />
                  </Button>
                </Link>
              </CardAction>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
