import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { PetRecordListProps } from "../types/PetRecord";

export function PetRecordList({memo, author, recordedAt}:PetRecordListProps) {
  return (
    <div className="flex justify-between overflow-scroll">
        <div className="flex gap-2">
          <div>
            <Avatar className="w-13 h-13 border">
              {/* <AvatarImage 
              src={author.profileImage}
              width={13}
              height={13}
              alt='profile'/> */}
            </Avatar>
          </div>
          <div>
            <p className="text-xs mt-1 text-gray-600 w-full">{author.nickname}</p>
            <div className="flex justify-between gap-2">
              <p className="bg-white p-1 rounded-sm">&nbsp;{memo ? memo : '-'}&nbsp;</p>
              <p className="items-end flex">{recordedAt}</p>
            </div>
          </div>
        </div>
        <Button variant="link" className="h-full">more</Button>
    </div>
  );
}