import { Card } from '@/components/ui/card';
import Image from 'next/image'
import { PetRecordList } from './PetRecordList';
import { PetRecordProps } from '../types/PetRecord';

export function PetRecordCard ({icon, name, count, memo, author, recordedAt}: PetRecordProps) {
  return (
    <Card className="bg-gray-500/50 w-full max-w-sm p-3">
      <div className="flex items-center gap-2">
        <Image 
        src={icon}
        width={24}
        height={24}
        alt='icon'
        />
        <span>{name}</span> 
      </div>
      <p>오늘 <b>{count}번</b> 기록했어요.</p>
      
      <PetRecordList memo={memo} author={author} recordedAt={recordedAt}></PetRecordList>
  
      
    </Card>
  );
}