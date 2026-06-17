import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";

export function FamilyHeader() {
    return (
        <div className="w-full space-y-3">
            <div className="flex items-center justify-between">

                {/* LEFT: 펫 프로필 영역 */}
                <div className="flex items-center gap-3">

                    {/* 강아지 프로필 */}
                    <Avatar className="w-13 h-13">
                        <AvatarImage src="/dog.png" />
                        <AvatarFallback>🐶</AvatarFallback>
                    </Avatar>

                    <div>
                        {/* 이름 + 드롭다운 */}
                        <div className="flex items-center gap-1">
                            <span className="font-semibold">라봉</span>
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                        </div>
                        {/* 공지 */}
                        <div className="text-sm text-gray-500">
                            🐾 오늘 산책은 20시에 진행됩니다.
                        </div>
                    </div>
                </div>

                {/* RIGHT: 메뉴 */}
                <Button variant="ghost" size="icon">
                    <Menu className="w-5 h-5" />
                </Button>
            </div>
        </div>
    );
}