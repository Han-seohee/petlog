import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function FamilyProfile({ name, image }: { name: string, image: string }) {
  return (
    <div className="flex flex-col items-start">
      <Avatar className="w-12 h-12">
          <AvatarImage src="/user1.jpg" />
          {/* <AvatarFallback>{image}</AvatarFallback> */}
      </Avatar>
      <span className="text-xs mt-1 text-gray-600 text-center w-full">{name}</span>
    </div>
  );
}