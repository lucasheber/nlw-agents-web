import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const createRoomSchema = z.object({
  name: z.string().min(3, "Room name is required"),
  description: z.string().optional(),
});

export function CreateRoomForm() {
  const createRoomForm = useForm({
    resolver: zodResolver(createRoomSchema),
  });

  function onSubmit(data: z.infer<typeof createRoomSchema>) {
    console.log("Creating room with data:", data);
    // Here you would typically call an API to create the room
  }

  return (
    <Card className="mr-8 flex flex-col">
      <CardHeader className="text-center">
        <CardTitle className="font-bold text-2xl">Create a Room</CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Enter the room name and description to create a new room.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Form {...createRoomForm}>
          <form
            className="flex flex-col gap-4"
            onSubmit={createRoomForm.handleSubmit(onSubmit)}
          >
            <FormField
              control={createRoomForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Room Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter room name"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={createRoomForm.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Room Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter room description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Create Room
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
