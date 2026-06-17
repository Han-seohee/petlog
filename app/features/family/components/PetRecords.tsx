import { FamilyDateBar } from "./FamilyDateBar";
import { PetRecordCard } from "./PetRecordCard";

export function PetRecords() {
    return (
        <div>
            <FamilyDateBar></FamilyDateBar>
            <div className="grid max-h-[150] h-full grid-cols-1 gap-3 place-content-stretch mt-3">
                <PetRecordCard
                icon="/icons/meal.svg"
                name="밥"
                count={3}
                author={{
                nickname: "엄마",
                profileImage: "/images/mom.png",
                }}
                recordedAt="18:30"
                memo="사료 100g">
                </PetRecordCard>

                <PetRecordCard
                icon="/icons/meal.svg"
                name="배변"
                count={1}
                author={{
                nickname: "나",
                profileImage: "/images/me.png",
                }}
                recordedAt="19:30"
                memo=""
                ></PetRecordCard>
            </div>
            
        </div>
    );
}