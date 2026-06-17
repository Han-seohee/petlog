import { FamilyProfile } from "@/app/features/family/components/FamilyProfile";
import { Button } from "@/components/ui/button";

export function FamilyProfiles() {
    return (
        <div>
            {/* 가족 프로필 + 추가 */}
            <div className="flex items-start gap-4 overflow-x-auto">

                {/* 가족 1 */}
                <FamilyProfile name="나" image="/user1.jpg" />

                {/* 가족 2 */}
                <FamilyProfile name="엄마" image="/user2.jpg" />

                {/* 가족 3 */}
                <FamilyProfile name="아빠" image="/user3.jpg" />

                {/* 가족 4 */}
                <FamilyProfile name="동생" image="/user4.jpg" />

                {/* 추가 버튼 */}
                <div className="flex flex-col items-start">
                <Button
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 rounded-full"
                >
                    +
                </Button>
                <span className="text-xs mt-1 text-gray-400 text-center w-full">추가</span>
                </div>

            </div>
        </div>
    );
}