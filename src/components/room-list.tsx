import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Room } from "@/http/types/room";
import { useRooms } from "@/http/use-rooms";

export function RoomList() {
  const { data, error, isLoading } = useRooms();
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading rooms: {error.message}</p>}

      <div className="w-full max-w-4xl">
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
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardAction>
            </CardHeader>
            <CardFooter>
              <div className="flex items-center justify-between gap-2">
                <Badge className="text-xs">
                  {room.questionsCount} questions
                </Badge>
                <Badge className="text-xs">
                  {new Date(room.createdAt).toLocaleDateString()}
                </Badge>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
