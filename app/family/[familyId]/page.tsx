import { FamilyHeader } from "@/app/features/family/components/FamilyHeader";
import { FamilyProfiles } from "@/app/features/family/components/FamilyProfiles";
import { PetRecords } from "@/app/features/family/components/PetRecords";

    export default function FamilyPage({ params }: { params: { familyId: string } }) {
    return (
        <div className="max-w-[430px] w-full mx-auto p-4 space-y-6">
            {/* Header */}
            <FamilyHeader />
            {/* Profiles */}
            <FamilyProfiles />
            {/* PetRecords */}
            <PetRecords />
        </div>
    );
}